"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { ProviderIcon } from "./provider-icons";
import type { OAuthProvider } from "@/lib/providers";

export function SocialLoginButton({ provider }: { provider: OAuthProvider }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await signIn.social(
      {
        provider: provider.id,
        callbackURL: "/dashboard",
      },
      {
        onError: () => {
          setLoading(false);
        },
      }
    );
  };

  return (
    <Button
      variant="outline"
      className="w-full h-11 font-medium"
      onClick={handleClick}
      disabled={loading}
    >
      <span className="inline-flex items-center gap-3">
        <span className="flex w-5 items-center justify-center shrink-0">
          <ProviderIcon provider={provider.icon} className="size-5" />
        </span>
        <span className="w-[10rem] text-left">Continue with {provider.name}</span>
      </span>
    </Button>
  );
}

export function SocialLoginButtons({
  providers,
}: {
  providers: OAuthProvider[];
}) {
  if (providers.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      {providers.map((provider) => (
        <SocialLoginButton key={provider.id} provider={provider} />
      ))}
    </div>
  );
}
