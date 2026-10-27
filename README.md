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

## Publicação gratuita no GitHub Pages

Site: **https://guilhermewittmann.github.io/JogoLixeiras/**

O projeto permanece em React e TanStack Start. A compilação de produção pré-renderiza a tela inicial em HTML e gera JavaScript e CSS com o caminho `/JogoLixeiras/`. O jogo roda inteiramente no navegador; nenhum servidor é publicado.

1. Envie estes arquivos para o repositório **GuilhermeWittmann/JogoLixeiras** (pela sincronização Git do Lovable ou pelo GitHub).
2. No repositório, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**.
3. Um envio para `main` ou `master` executa **Deploy game to GitHub Pages** automaticamente. Também é possível iniciá-lo em **Actions → Deploy game to GitHub Pages → Run workflow**.

O workflow instala as versões travadas em `bun.lock`, executa os testes, compila e verifica o HTML e os caminhos dos arquivos antes de publicar **somente `dist/client`**. `dist/server` é usado apenas durante a geração e não é hospedado.

### Verificação local

```sh
bun install --frozen-lockfile
bun run test
bun run build:pages
```

`bun run build:pages` falha se faltar HTML pré-renderizado ou se algum arquivo local tiver caminho incorreto. Para conferir sem servidor de aplicação, sirva `dist/client` dentro de uma pasta chamada `JogoLixeiras` usando um servidor HTTP estático e abra `/JogoLixeiras/`.

`bun run dev` mantém o jogo no caminho `/` durante o desenvolvimento. A compilação de produção (`bun run build` ou `bun run build:pages`) usa `/JogoLixeiras/`. Não clique em Publish no Lovable para esta hospedagem: a publicação é feita pelo workflow do GitHub.
