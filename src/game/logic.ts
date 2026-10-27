import { BINS, ITEMS, type BinId, type WasteItem } from "./data";

export const ROUND_SIZE = 10;
export const POINTS_PER_HIT = 10;

export function shuffle<T>(arr: T[], rand: () => number = Math.random): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function drawRound(rand: () => number = Math.random, items: WasteItem[] = ITEMS): WasteItem[] {
  const picked: WasteItem[] = [];
  for (const bin of BINS) {
    const group = items.filter((i) => i.bin === bin.id);
    picked.push(group[Math.floor(rand() * group.length)]);
  }
  const rest = items.filter((i) => !picked.includes(i));
  picked.push(...shuffle(rest, rand).slice(0, ROUND_SIZE - BINS.length));
  return shuffle(picked, rand);
}

const key = (r: WasteItem[]) => r.map((i) => i.id).sort((a, b) => a - b).join(",");

export function drawNewRound(previous: WasteItem[] | null, rand: () => number = Math.random) {
  let round = drawRound(rand);
  for (let t = 0; previous && t < 20 && key(round) === key(previous); t++) round = drawRound(rand);
  return round;
}

export interface Answer {
  itemId: number;
  chosen: BinId;
  correct: boolean;
}

/** Records an answer only if the item hasn't been answered yet. */
export function recordAnswer(answers: Answer[], item: WasteItem, chosen: BinId): Answer[] {
  if (answers.some((a) => a.itemId === item.id)) return answers;
  return [...answers, { itemId: item.id, chosen, correct: chosen === item.bin }];
}

export const scoreOf = (answers: Answer[]) => answers.filter((a) => a.correct).length * POINTS_PER_HIT;

export function resultMessage(score: number) {
  if (score >= 80) return "Agente Ecológico! Você sabe onde cada lixo vai.";
  if (score >= 50) return "Quase lá! Você já separa bem.";
  return "Você está começando! Joga de novo e descubra mais.";
}
