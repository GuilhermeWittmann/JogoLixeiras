// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { ConfigEnv } from "vite";

// Resolve wrapper options before calling defineConfig: its callback overload
// accepts Vite options, not Lovable/TanStack wrapper options.
export default (env: ConfigEnv) => {
  const pages = env.command === "build" && env.mode !== "development";

  return defineConfig({
    vite: { base: pages ? "/JogoLixeiras/" : "/" },
    nitro: pages ? false : undefined,
    tanstackStart: {
      server: { entry: "server" },
      ...(pages ? {
        router: { basepath: "/JogoLixeiras" },
        pages: [{ path: "/" }],
        prerender: {
          enabled: true,
          autoStaticPathsDiscovery: false,
          crawlLinks: false,
          failOnError: true,
        },
      } : {}),
    },
  })(env);
};
