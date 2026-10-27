import { describe, it, expect } from "vitest";
import { ITEMS, BINS } from "@/game/data";
import { drawRound, drawNewRound, recordAnswer, scoreOf, resultMessage } from "@/game/logic";

describe("regras do jogo", () => {
  it("tem exatamente 24 resíduos, 4 por lixeira", () => {
    expect(ITEMS).toHaveLength(24);
    for (const b of BINS) expect(ITEMS.filter((i) => i.bin === b.id)).toHaveLength(4);
  });
  it("cada partida tem 10 itens distintos com as 6 categorias", () => {
    for (let n = 0; n < 500; n++) {
      const r = drawRound();
      expect(r).toHaveLength(10);
      expect(new Set(r.map((i) => i.id)).size).toBe(10);
      expect(new Set(r.map((i) => i.bin)).size).toBe(6);
    }
  });
  it("nova partida difere da anterior", () => {
    const a = drawRound();
    const b = drawNewRound(a);
    expect(b.map((i) => i.id).sort().join()).not.toBe(a.map((i) => i.id).sort().join());
  });
  it("acerto soma 10, erro não pontua, sem duplicidade", () => {
    const banana = ITEMS[16]!;
    let ans = recordAnswer([], banana, "marrom");
    expect(scoreOf(ans)).toBe(10);
    ans = recordAnswer(ans, banana, "marrom");
    expect(ans).toHaveLength(1);
    expect(scoreOf(recordAnswer([], banana, "azul"))).toBe(0);
  });
  it("pontuação máxima é 100", () => {
    const r = drawRound();
    const ans = r.reduce((acc, i) => recordAnswer(acc, i, i.bin), [] as ReturnType<typeof recordAnswer>);
    expect(scoreOf(ans)).toBe(100);
  });
  it("faixas de mensagem", () => {
    expect(resultMessage(40)).toMatch(/começando/);
    expect(resultMessage(50)).toMatch(/Quase lá/);
    expect(resultMessage(70)).toMatch(/Quase lá/);
    expect(resultMessage(80)).toMatch(/Agente/);
  });
});
