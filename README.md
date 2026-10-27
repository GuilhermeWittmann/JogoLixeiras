# Lixo no Lugar Certo ♻️

> Cada lixo tem seu lugar. Descubra o certo!

Jogo educativo sobre coleta seletiva para estudantes do Ensino Médio.

## Tecnologias
React 19, TypeScript, TanStack Start/Router, Vite, Tailwind CSS v4 e Vitest.

## Estrutura
- `src/game/data.ts` — lixeiras e os 24 resíduos
- `src/game/logic.ts` — sorteio (1 por categoria + 4 extras, Fisher–Yates), pontuação e mensagens
- `src/components/game/` — telas `StartScreen`, `PlayScreen`, `ResultScreen` e o gerenciador `Game`
- `src/styles.css` — sistema de design (cores das lixeiras, botões, animações)
- `src/test/` — testes das regras

## Executar localmente
```bash
bun install   # ou npm install
bun run dev   # http://localhost:8080
```

## Testar
```bash
bunx vitest run
```

## Produção
```bash
bun run build
```

## Publicar
O jogo não usa backend, login nem dados pessoais. A forma mais simples é o botão **Publish** do Lovable.
Para o GitHub Pages, é preciso gerar uma versão estática (pré-renderização do TanStack Start, com `base` igual ao nome do repositório) e publicar a pasta gerada pelo GitHub Actions (`actions/deploy-pages`).
