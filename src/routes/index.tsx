import { createFileRoute } from "@tanstack/react-router";
import { Game } from "@/components/game/Game";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lixo no Lugar Certo — Jogo de coleta seletiva" },
      { name: "description", content: "Cada lixo tem seu lugar. Descubra o certo! Jogo educativo sobre as cores das lixeiras." },
      { property: "og:title", content: "Lixo no Lugar Certo" },
      { property: "og:description", content: "Cada lixo tem seu lugar. Descubra o certo!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Game,
});
