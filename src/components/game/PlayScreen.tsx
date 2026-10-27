import { BINS, getBin, type BinId, type WasteItem } from "@/game/data";
import type { Answer } from "@/game/logic";
import { ROUND_SIZE } from "@/game/logic";

interface Props {
  item: WasteItem;
  index: number;
  score: number;
  answer?: Answer | undefined;
  onAnswer: (bin: BinId) => void;
  onNext: () => void;
}

export function PlayScreen({ item, index, score, answer, onAnswer, onNext }: Props) {
  const correctBin = getBin(item.bin);
  const isLast = index === ROUND_SIZE - 1;
  const answered = !!answer;

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="flex items-center justify-between font-semibold">
        <span>Item {index + 1} de {ROUND_SIZE}</span>
        <span className="chip">⭐ {score} pontos</span>
      </div>
      <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuemin={0} aria-valuemax={ROUND_SIZE} aria-valuenow={index + 1} aria-label="Progresso">
        <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${((index + 1) / ROUND_SIZE) * 100}%` }} />
      </div>

      <div key={item.id} className="card mt-6 p-6 text-center animate-rise sm:p-8">
        <div className="text-7xl sm:text-8xl" aria-hidden>{item.emoji}</div>
        <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{item.name}</h2>
        <p className="mt-2 text-muted-foreground">Em qual lixeira ele deve ser descartado?</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {BINS.map((b) => {
          const state = !answered ? "" : b.id === item.bin ? "is-correct" : b.id === answer.chosen ? "is-wrong" : "is-dim";
          return (
            <button
              key={b.id}
              disabled={answered}
              onClick={() => onAnswer(b.id)}
              className={`bin-btn bin-${b.id} ${state}`}
              aria-label={`Lixeira ${b.name}`}
            >
              <span aria-hidden>{b.symbol}</span> {b.name}
              {state === "is-correct" && <span className="sr-only"> (correta)</span>}
              {state === "is-wrong" && <span className="sr-only"> (sua escolha)</span>}
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="min-h-0">
        {answer && (
          <div className={`feedback mt-6 animate-rise ${answer.correct ? "feedback-ok" : "feedback-bad"}`}>
            <p className="font-bold">
              {answer.correct ? "✅ Isso mesmo! " : "❌ Quase! "}
              {item.name} vai na lixeira {correctBin.name.toLowerCase()}!
            </p>
            <p className="mt-1">{item.explanation}</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-end">
        <button onClick={onNext} disabled={!answered} className="btn-primary">
          {isLast ? "Ver resultado" : "Próximo"} →
        </button>
      </div>
    </div>
  );
}
