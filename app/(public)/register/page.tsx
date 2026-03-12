import { getEnabledProviders } from "@/lib/providers";
import { RegisterClient } from "./register-client";

export default function RegisterPage() {
  const providers = getEnabledProviders();
  return <RegisterClient providers={providers} />;
}
