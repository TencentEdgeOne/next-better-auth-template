"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.replace("/login");
        },
        onError: () => {
          setLoading(false);
        },
      },
    });
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      disabled={loading}
      className="gap-2"
    >
      <LogOut className="size-4" />
      {loading ? "Signing out..." : "Sign out"}
    </Button>
  );
}
