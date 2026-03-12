import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  KeyRound,
  Users,
  Sparkles,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Shield className="size-4" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Better Auth
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button size="sm" className="shadow-md shadow-primary/20" asChild>
              <Link href="/register">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 left-[40%] h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/10 via-violet-500/4 to-transparent blur-3xl animate-pulse-glow" />
            <div className="absolute top-40 -left-32 size-72 rounded-full bg-violet-500/6 blur-3xl animate-float" />
            <div className="absolute top-20 -right-32 size-80 rounded-full bg-violet-400/6 blur-3xl animate-float-delayed" />
          </div>

          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-sm font-medium text-violet-600">
                <Sparkles className="size-3.5" />
                Auth starter template
              </div>

              <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Next.js +{" "}
                </span>
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Better Auth
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                A clean authentication starter kit. Configure your environment
                variables and start building — social login, email/password
                auth, and a dashboard are ready to go.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base shadow-lg shadow-primary/25 transition-shadow hover:shadow-xl hover:shadow-primary/30"
                  asChild
                >
                  <Link href="/register">
                    Get started
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base"
                  asChild
                >
                  <Link href="/login">Sign in</Link>
                </Button>
              </div>

              {/* Tech stack badges */}
              <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
                {[
                  "Next.js",
                  "Better Auth",
                  "Supabase",
                  "shadcn/ui",
                  "TypeScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground hover:border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative border-t">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background" />
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="mb-14 text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-violet-600">
                <Zap className="size-4" />
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What&apos;s included
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: KeyRound,
                  title: "Multiple Auth Methods",
                  description:
                    "Email/password and OAuth social login — ships with GitHub, Google, Discord, and Slack. Easy to add more providers following the same pattern.",
                  gradient: "from-indigo-500/10 to-indigo-500/5",
                  iconColor: "text-indigo-600",
                },
                {
                  icon: Shield,
                  title: "Secure by Default",
                  description:
                    "Server-side session validation, protected routes with automatic redirect, and cookie management via Better Auth.",
                  gradient: "from-violet-500/10 to-violet-500/5",
                  iconColor: "text-violet-600",
                },
                {
                  icon: Users,
                  title: "Clean Integration",
                  description:
                    "A clear, minimal example of how Next.js and Better Auth work together — well-structured code you can read, understand, and build on.",
                  gradient: "from-purple-500/10 to-purple-500/5",
                  iconColor: "text-purple-600",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group relative rounded-2xl border bg-card p-7 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
                >
                  <div
                    className={`mb-4 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient}`}
                  >
                    <feature.icon className={`size-5 ${feature.iconColor}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex size-5 items-center justify-center rounded bg-muted">
                <Shield className="size-3 text-muted-foreground" />
              </div>
              Built with Next.js, Better Auth, Supabase, and shadcn/ui.
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link
                href="https://www.better-auth.com/docs/introduction"
                target="_blank"
                className="transition-colors hover:text-foreground"
              >
                Docs
              </Link>
              <Link
                href="https://github.com/TencentEdgeOne/next-better-auth-template"
                target="_blank"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
