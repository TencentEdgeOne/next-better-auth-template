import { getEnabledProviders } from "@/lib/providers";
import { LoginClient } from "./login-client";

export default function LoginPage() {
  const providers = getEnabledProviders();
  return <LoginClient providers={providers} />;
}
