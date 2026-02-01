import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import CodeBlockTabs from "../components/CodeBlockTabs";
import Tip from "../components/Tip";

export const metadata = {
  title: "Docker | TechTrio Tutorial",
  description:
    "From scratch to advanced: what is Docker, install, build & run, docker-compose, volumes, networks, production tips.",
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-8 border-b border-zinc-200 py-10 dark:border-zinc-800"
    >
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
      {children}
    </h3>
  );
}

export default function DockerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
          TechTrio Automation
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Docker
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          From scratch to advanced: what Docker is, how to install it, build and run this app, then volumes, networks, and production tips.
        </p>

        <nav className="mt-8 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 [&_a]:inline-flex [&_a]:min-h-[44px] [&_a]:items-center [&_a]:rounded-lg [&_a]:px-2 [&_a]:py-2 [&_a]:text-sm [&_a]:text-blue-600 [&_a]:hover:bg-blue-50 [&_a]:dark:text-blue-400 [&_a]:dark:hover:bg-blue-950/30 sm:[&_a]:min-h-0 sm:[&_a]:py-1" aria-label="Quick jump">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Quick jump
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm sm:gap-x-4">
            <li><a href="#what-is-docker">What is Docker</a></li>
            <li><a href="#install">Install</a></li>
            <li><a href="#why">Why Docker</a></li>
            <li><a href="#build">Build & run</a></li>
            <li><a href="#compose">Docker Compose</a></li>
            <li><a href="#tips">Tips</a></li>
            <li><a href="#advanced">Advanced</a></li>
          </ul>
        </nav>

        {/* WHAT IS DOCKER - SCRATCH */}
        <Section id="what-is-docker" title="0. What is Docker? (Scratch)">
          <p>
            <strong>Docker</strong> packages your app and its dependencies into a <strong>container</strong>—a lightweight, portable unit that runs the same way on your laptop, a server, or in the cloud. No &quot;works on my machine&quot; issues.
          </p>
          <p>
            A <strong>Docker image</strong> is the blueprint; a <strong>container</strong> is a running instance of that image. You define images in a <code>Dockerfile</code>, build them with <code>docker build</code>, and run them with <code>docker run</code>.
          </p>
          <H3>Docker vs virtual machines</H3>
          <p>
            Containers share the host OS kernel and are much lighter than VMs. They start fast and use less memory, ideal for apps and microservices.
          </p>
        </Section>

        {/* INSTALL - SCRATCH */}
        <Section id="install" title="1. Install Docker (First-time setup)">
          <p>
            Install Docker for your OS. Select your platform below. Docker Desktop (Mac/Windows) includes the daemon and CLI; on Linux install the engine directly.
          </p>
          <CodeBlockTabs
            title="Install Docker"
            mac="# Download Docker Desktop from docker.com, or:
brew install --cask docker"
            windows="winget install Docker.DockerDesktop"
            linux={`sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo usermod -aG docker $USER   # then log out and back in`}
          />
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Mac/Windows: Or download <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Docker Desktop</a>. Linux Fedora: <code>sudo dnf install docker docker-compose-plugin</code>.
          </p>
          <H3>Verify install</H3>
          <CodeBlockTabs
            title="Commands"
            mac={`docker --version
docker compose version`}
            windows={`docker --version
docker compose version`}
            linux={`docker --version
docker compose version`}
          />
        </Section>

        <Section id="why" title="2. Why Docker?">
          <p>
            Docker gives you a consistent environment: same Node version, same
            OS, same dependencies everywhere (local, CI, staging, production).
            No &quot;works on my machine&quot; issues.
          </p>
          <Tip title="Use for local dev and CI">
            <p>
              Run <code>docker compose up</code> to start the app locally
              without installing Node. In CI, build the image and run tests or
              serve the app in the same container.
            </p>
          </Tip>
        </Section>

        <Section id="build" title="3. Build & run with Docker">
          <H3>Build the image</H3>
          <CodeBlockTabs
            title="Command"
            mac="docker build -t techtrio-tutorial ."
            windows="docker build -t techtrio-tutorial ."
            linux="docker build -t techtrio-tutorial ."
          />
          <H3>Run the container</H3>
          <CodeBlockTabs
            title="Command"
            mac="docker run -p 3000:3000 techtrio-tutorial"
            windows="docker run -p 3000:3000 techtrio-tutorial"
            linux="docker run -p 3000:3000 techtrio-tutorial"
          />
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Open <code>http://localhost:3000</code>. The app runs in
            production mode (<code>next start</code>).
          </p>
          <H3>Run in background</H3>
          <CodeBlock title="Command">{`docker run -d -p 3000:3000 --name tutorial techtrio-tutorial`}</CodeBlock>
          <CodeBlock title="Stop and remove">{`docker stop tutorial && docker rm tutorial`}</CodeBlock>
        </Section>

        <Section id="compose" title="4. Docker Compose">
          <p>
            Use <code>docker compose</code> to start the app with one command.
            The <code>docker-compose.yml</code> in this repo defines the
            service.
          </p>
          <H3>Start</H3>
          <CodeBlockTabs
            title="Command"
            mac="docker compose up --build"
            windows="docker compose up --build"
            linux="docker compose up --build"
          />
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <code>--build</code> rebuilds the image if the Dockerfile or
            source changed. Omit it to use a cached image.
          </p>
          <H3>Start in background</H3>
          <CodeBlockTabs
            title="Command"
            mac="docker compose up -d --build"
            windows="docker compose up -d --build"
            linux="docker compose up -d --build"
          />
          <H3>Stop</H3>
          <CodeBlockTabs
            title="Command"
            mac="docker compose down"
            windows="docker compose down"
            linux="docker compose down"
          />
          <Tip title="Rebuild after code changes" variant="success">
            <p>
              After changing code, run <code>docker compose up --build</code>
              again so the image is rebuilt with your changes.
            </p>
          </Tip>
        </Section>

        <Section id="tips" title="5. Cool tips">
          <Tip title="Multi-stage builds">
            <p>
              The Dockerfile uses a build stage and a slim runtime stage. Only
              the runtime stage ends up in the final image, so it stays small.
            </p>
          </Tip>
          <Tip title="Layer caching">
            <p>
              Dependencies are installed before copying source code. So
              changing code alone doesn&apos;t invalidate the dependency layer;
              rebuilds are faster.
            </p>
          </Tip>
          <Tip title="Use in CI">
            <p>
              In GitHub Actions or other CI, build the image and run{" "}
              <code>npm run build</code> or <code>npm run test</code> inside
              the container to ensure the same environment as production.
            </p>
          </Tip>
          <Tip title="Environment variables">
            <p>
              Pass env vars with <code>-e KEY=value</code> or use a{" "}
              <code>.env</code> file and <code>docker compose --env-file
              .env</code>. Never bake secrets into the image.
            </p>
          </Tip>
        </Section>

        {/* ADVANCED */}
        <Section id="advanced" title="6. Advanced: volumes, networks, production">
          <p>
            Use volumes for persistent data, networks for multi-container apps, and best practices for production.
          </p>
          <H3>Volumes — persist data</H3>
          <p>
            Containers are ephemeral: when you remove one, its filesystem is gone. Use volumes to persist data (databases, uploads) across container restarts.
          </p>
          <CodeBlock title="Create and use a named volume">{`docker run -d -v mydata:/app/data myimage
# or in docker-compose.yml:
volumes:
  - mydata:/app/data`}</CodeBlock>
          <H3>Bind mounts — dev workflow</H3>
          <p>
            Mount your local source code into the container so changes reflect immediately without rebuilding. Path syntax differs by shell.
          </p>
          <CodeBlockTabs
            title="Bind mount for development"
            mac="docker run -v $(pwd):/app myimage"
            windows="docker run -v %cd%:/app myimage"
            linux="docker run -v $(pwd):/app myimage"
          />
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Windows: Use <code>%cd%</code> in CMD. In PowerShell use <code>{'${PWD}'}</code>. In Git Bash use <code>$(pwd)</code>.
          </p>
          <H3>Networks — multi-container</H3>
          <p>
            Put containers on the same network so they can talk (e.g. app + database).
          </p>
          <CodeBlock title="docker-compose.yml with network">{`services:
  app:
    image: myapp
    networks:
      - mynet
  db:
    image: postgres:16
    networks:
      - mynet
networks:
  mynet: {}`}</CodeBlock>
          <H3>Production tips</H3>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>Use multi-stage builds (this repo&apos;s Dockerfile does) to keep images small</li>
            <li>Run as non-root user when possible</li>
            <li>Set resource limits: <code>docker run --memory 512m --cpus 0.5</code></li>
            <li>Use <code>.dockerignore</code> to exclude <code>node_modules</code>, <code>.git</code>, etc.</li>
          </ul>
        </Section>

        <div className="flex flex-wrap gap-4 py-10">
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
          >
            Contact &amp; Help →
          </Link>
          <Link
            href="/"
            className="inline-block rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
