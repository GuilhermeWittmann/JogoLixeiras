import { useState } from "react";
import type { BinId, WasteItem } from "@/game/data";
import { drawNewRound, recordAnswer, scoreOf, type Answer } from "@/game/logic";
import { StartScreen } from "./StartScreen";
import { PlayScreen } from "./PlayScreen";
import { ResultScreen } from "./ResultScreen";

type Screen = "start" | "play" | "result";

export function Game() {
  const [screen, setScreen] = useState<Screen>("start");
  const [round, setRound] = useState<WasteItem[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const top = () => window.scrollTo({ top: 0 });

  const play = () => {
    setRound((prev) => drawNewRound(prev.length ? prev : null));
    setIndex(0);
    setAnswers([]);
    setScreen("play");
    top();
  };

  const item = round[index];
  const answer = item && answers.find((a) => a.itemId === item.id);

  const onAnswer = (bin: BinId) => setAnswers((prev) => recordAnswer(prev, item, bin));
  const onNext = () => {
    if (!answer) return;
    if (index === round.length - 1) setScreen("result");
    else setIndex((i) => i + 1);
    top();
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-app px-4 py-8 sm:py-14">
      {screen === "start" && <StartScreen onPlay={play} />}
      {screen === "play" && item && (
        <PlayScreen item={item} index={index} score={scoreOf(answers)} answer={answer} onAnswer={onAnswer} onNext={onNext} />
      )}
      {screen === "result" && <ResultScreen round={round} answers={answers} onHome={() => { setScreen("start"); top(); }} />}
    </main>
  );
}
