export interface OAuthProvider {
  id: string;
  name: string;
  icon: string;
}

interface ProviderConfig {
  id: string;
  name: string;
  icon: string;
  envClientId: string;
  envClientSecret: string;
}

const allProviders: ProviderConfig[] = [
  {
    id: "github",
    name: "GitHub",
    icon: "github",
    envClientId: "GITHUB_CLIENT_ID",
    envClientSecret: "GITHUB_CLIENT_SECRET",
  },
  {
    id: "google",
    name: "Google",
    icon: "google",
    envClientId: "GOOGLE_CLIENT_ID",
    envClientSecret: "GOOGLE_CLIENT_SECRET",
  },
  {
    id: "discord",
    name: "Discord",
    icon: "discord",
    envClientId: "DISCORD_CLIENT_ID",
    envClientSecret: "DISCORD_CLIENT_SECRET",
  },
  {
    id: "slack",
    name: "Slack",
    icon: "slack",
    envClientId: "SLACK_CLIENT_ID",
    envClientSecret: "SLACK_CLIENT_SECRET",
  },
];

export function getEnabledProviders(): OAuthProvider[] {
  return allProviders
    .filter((p) => {
      const clientId = process.env[p.envClientId];
      const clientSecret = process.env[p.envClientSecret];
      return clientId && clientSecret;
    })
    .map((p) => ({
      id: p.id,
      name: p.name,
      icon: p.icon,
    }));
}

export function getSocialProviderConfig() {
  const config: Record<string, { clientId: string; clientSecret: string }> = {};

  for (const provider of allProviders) {
    const clientId = process.env[provider.envClientId];
    const clientSecret = process.env[provider.envClientSecret];
    if (clientId && clientSecret) {
      config[provider.id] = { clientId, clientSecret };
    }
  }

  return config;
}
