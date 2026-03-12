import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { LogoutButton } from "@/components/auth/logout-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Clock, Key, Activity, CheckCircle, AlertCircle, User as UserIcon } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const { user } = session;

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : user.email?.[0]?.toUpperCase() ?? "?";

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="size-4" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Better Auth
              </span>
            </Link>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-violet-500/10">
              <Activity className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Welcome back, {user.name?.split(" ")[0] ?? "there"}
              </h2>
              <p className="text-muted-foreground text-sm">
                Here&apos;s your account overview
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {/* Profile Card */}
          <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-lg bg-indigo-500/10">
                  <UserIcon className="size-3.5 text-indigo-600" />
                </div>
                Profile
              </CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="size-12 ring-2 ring-border">
                  <AvatarImage src={user.image ?? undefined} alt={user.name} />
                  <AvatarFallback className="text-sm font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold leading-none">
                    {user.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {user.email}
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Email verified
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    user.emailVerified
                      ? "bg-emerald-500/10 text-emerald-600"
                      : "bg-amber-500/10 text-amber-600"
                  }`}
                >
                  {user.emailVerified ? (
                    <><CheckCircle className="size-3" /> Verified</>
                  ) : (
                    <><AlertCircle className="size-3" /> Unverified</>
                  )}
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  Joined
                </span>
                <span className="text-sm font-medium">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "—"}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Session Card */}
          <Card className="flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-lg bg-violet-500/10">
                  <Key className="size-3.5 text-violet-600" />
                </div>
                Session
              </CardTitle>
              <CardDescription>Current active session details</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-muted-foreground shrink-0">User ID</span>
                <span className="text-sm font-medium font-[family-name:var(--font-mono)] break-all text-right">
                  {user.id ?? "—"}
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-muted-foreground shrink-0">Session ID</span>
                <span className="text-sm font-medium font-[family-name:var(--font-mono)] break-all text-right">
                  {session.session?.id ?? "—"}
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Expires at</span>
                <span className="text-sm font-medium">
                  {session.session?.expiresAt
                    ? new Date(session.session.expiresAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )
                    : "—"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
