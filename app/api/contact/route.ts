import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL;

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
const MAX_FILES = 4;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const type = (formData.get("type") as string) ?? "issue";
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const files: { filename: string; content: Buffer }[] = [];
    const fileList = formData.getAll("screenshots") as File[];
    if (fileList?.length > MAX_FILES) {
      return NextResponse.json(
        { error: `Maximum ${MAX_FILES} screenshots allowed.` },
        { status: 400 }
      );
    }
    for (const file of fileList) {
      if (!file?.size) continue;
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `File ${file.name} exceeds 5MB.` },
          { status: 400 }
        );
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { error: `File ${file.name}: only JPEG, PNG, GIF, WebP allowed.` },
          { status: 400 }
        );
      }
      files.push({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      });
    }

    const subject = `[TechTrio Tutorial] ${type === "reference" ? "Reference help" : "Issue"}: ${name}`;
    const html = `
      <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      <p><strong>Type:</strong> ${type === "reference" ? "Reference help" : "Issue"}</p>
      <hr />
      <pre style="white-space: pre-wrap; font-family: sans-serif;">${escapeHtml(message)}</pre>
      ${files.length ? `<p><em>${files.length} screenshot(s) attached.</em></p>` : ""}
    `;

    if (resend) {
      const attachments = files.map((f) => ({
        filename: f.filename,
        content: f.content.toString("base64"),
      }));
      const { error } = await resend.emails.send({
        from: CONTACT_EMAIL,
        to: TO_EMAIL,
        subject,
        html,
        attachments: attachments.length ? attachments : undefined,
      });
      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Failed to send message. Please try again." },
          { status: 500 }
        );
      }
    } else {
      console.log("[Contact form] No RESEND_API_KEY; submission:", {
        name,
        email,
        type,
        message,
        fileCount: files.length,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
