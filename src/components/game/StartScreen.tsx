import { BINS } from "@/game/data";

export function StartScreen({ onPlay }: { onPlay: () => void }) {
  return (
    <div className="mx-auto w-full max-w-3xl animate-rise">
      <header className="text-center">
        <div className="text-6xl sm:text-7xl" aria-hidden>♻️</div>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Lixo no Lugar Certo
        </h1>
        <p className="mt-3 text-lg font-semibold text-primary sm:text-xl">
          Cada lixo tem seu lugar. Descubra o certo!
        </p>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Teste seus conhecimentos sobre coleta seletiva e ajude o planeta.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
          <span className="chip">🗂️ 10 itens por partida</span>
          <span className="chip">⏳ Sem limite de tempo</span>
        </div>
        <button onClick={onPlay} className="btn-primary mt-8 px-12 text-lg">
          Jogar
        </button>
      </header>

      <section aria-labelledby="guia" className="card mt-12 p-5 sm:p-8">
        <h2 id="guia" className="font-display text-2xl font-bold text-foreground">Guia das lixeiras</h2>
        <table className="mt-5 hidden w-full text-left sm:table">
          <thead>
            <tr className="text-sm text-muted-foreground">
              <th className="pb-3 font-semibold">Cor</th>
              <th className="pb-3 font-semibold">Material</th>
            </tr>
          </thead>
          <tbody>
            {BINS.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="py-3">
                  <span className="flex items-center gap-3 font-semibold">
                    <span className={`swatch bin-${b.id}`} aria-hidden />
                    {b.symbol} {b.name}
                  </span>
                </td>
                <td className="py-3 text-foreground">{b.material}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:hidden">
          {BINS.map((b) => (
            <li key={b.id} className="rounded-2xl border bg-background p-3">
              <span className={`swatch bin-${b.id} mb-2 block`} aria-hidden />
              <p className="font-semibold">{b.symbol} {b.name}</p>
              <p className="text-sm text-muted-foreground">{b.material}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
  <div className="mt-8 pb-4 text-center text-sm text-muted-foreground">
  Desenvolvido por: Guilherme Wittmann, Ana Hennig e Nicoly Leonardi
</div>
}
