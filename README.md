# https://guilhermewittmann.github.io/JogoLixeiras/ 

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
