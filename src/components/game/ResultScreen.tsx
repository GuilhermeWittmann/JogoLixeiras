import { getBin, type WasteItem } from "@/game/data";
import { resultMessage, scoreOf, type Answer } from "@/game/logic";

export function ResultScreen({ round, answers, onHome }: { round: WasteItem[]; answers: Answer[]; onHome: () => void }) {
  const score = scoreOf(answers);
  const hits = answers.filter((a) => a.correct).length;
  const wrong = round.filter((i) => answers.find((a) => a.itemId === i.id && !a.correct));

  return (
    <div className="mx-auto w-full max-w-2xl animate-rise">
      <div className="card p-6 text-center sm:p-10">
        <h1 className="font-display text-3xl font-extrabold">Resultado da partida</h1>
        <div className="score-ring mx-auto mt-6" style={{ ["--pct" as string]: `${score}%` }}>
          <div className="score-inner">
            <span className="font-display text-4xl font-extrabold">{score}</span>
            <span className="text-sm text-muted-foreground">de 100</span>
          </div>
        </div>
        <p className="mt-5 text-lg font-semibold text-primary">{resultMessage(score)}</p>
        <div className="mt-5 flex justify-center gap-3">
          <span className="chip">✅ {hits} acertos</span>
          <span className="chip">❌ {10 - hits} erros</span>
        </div>
      </div>

      <section className="card mt-6 p-6">
        {wrong.length === 0 ? (
          <p className="text-center text-lg font-semibold">🏆 Perfeito! Você acertou todos os itens desta partida!</p>
        ) : (
          <>
            <h2 className="font-display text-xl font-bold">Vamos revisar?</h2>
            <ul className="mt-4 space-y-2">
              {wrong.map((i) => {
                const b = getBin(i.bin);
                return (
                  <li key={i.id} className="flex items-center gap-3 rounded-2xl border bg-background p-3">
                    <span className="text-3xl" aria-hidden>{i.emoji}</span>
                    <span className="flex-1 font-semibold">{i.name}</span>
                    <span className={`tag bin-${b.id}`}>{b.symbol} {b.name}</span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </section>

      <div className="mt-8 text-center">
        <button onClick={onHome} className="btn-primary px-10">Voltar à tela inicial</button>
      </div>
    </div>
  );
}
