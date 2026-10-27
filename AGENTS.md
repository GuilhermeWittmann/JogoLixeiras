<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Deployment architecture
- Production builds prerender the game into `dist/client` with a repository basepath; development stays at `/` so the editor preview remains usable.
- GitHub Actions deploys only the verified client artifact; Nitro is disabled for production because GitHub Pages cannot run a server.
- Keep the existing TanStack router and client-side game state; static hosting must not require a replacement framework or runtime server.
