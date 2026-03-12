"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SocialLoginButtons } from "@/components/auth/social-login-button";
import { signUp, useSession } from "@/lib/auth-client";
import type { OAuthProvider } from "@/lib/providers";
import { Loader2, Shield } from "lucide-react";

export function RegisterClient({ providers }: { providers: OAuthProvider[] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.replace("/dashboard");
    }
  }, [session, router]);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    await signUp.email(
      { email, password, name },
      {
        onSuccess: () => {
          router.replace("/dashboard");
        },
        onError: (ctx) => {
          setError(ctx.error.message ?? "Sign up failed. Please try again.");
          setLoading(false);
        },
      }
    );
  };

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center p-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-2/3 h-[400px] w-[550px] -translate-x-1/2 translate-y-1/3 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-0 left-0 h-[350px] w-[500px] -translate-x-1/4 -translate-y-1/4 rounded-full bg-violet-400/5 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Logo */}
      <Link
        href="/"
        className="mb-8 flex items-center gap-2.5 transition-opacity hover:opacity-80"
      >
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/20">
          <Shield className="size-4" />
        </div>
        <span className="text-lg font-bold tracking-tight">Better Auth</span>
      </Link>

      {/* Card */}
      <Card className="w-full max-w-sm border shadow-lg shadow-black/[0.04]">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-xl font-bold tracking-tight">
            Create an account
          </CardTitle>
          <CardDescription>
            Get started with your new account
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          {providers.length > 0 && (
            <>
              <SocialLoginButtons providers={providers} />
              <div className="relative my-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground uppercase tracking-wider">
                  or
                </span>
              </div>
            </>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                className="h-11"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="h-11"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
                className="h-11"
              />
            </div>

            {error && (
              <p className="text-sm text-destructive text-center">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full h-11 shadow-md shadow-primary/20"
              disabled={loading}
            >
              {loading && <Loader2 className="size-4 animate-spin" />}
              Create account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-violet-600 hover:underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
