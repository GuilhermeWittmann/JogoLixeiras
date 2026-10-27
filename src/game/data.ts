export type BinId = "azul" | "vermelha" | "verde" | "amarela" | "marrom" | "cinza";

export interface Bin {
  id: BinId;
  symbol: string;
  name: string;
  material: string;
}

export interface WasteItem {
  id: number;
  name: string;
  emoji: string;
  bin: BinId;
  explanation: string;
}

export const BINS: Bin[] = [
  { id: "azul", symbol: "🔵", name: "Azul", material: "Papel e papelão" },
  { id: "vermelha", symbol: "🔴", name: "Vermelha", material: "Plástico" },
  { id: "verde", symbol: "🟢", name: "Verde", material: "Vidro" },
  { id: "amarela", symbol: "🟡", name: "Amarela", material: "Metal" },
  { id: "marrom", symbol: "🟤", name: "Marrom", material: "Resíduos orgânicos" },
  { id: "cinza", symbol: "⚪", name: "Cinza", material: "Rejeitos não recicláveis" },
];

export const getBin = (id: BinId) => BINS.find((b) => b.id === id)!;

export const ITEMS: WasteItem[] = [
  { id: 1, name: "Jornal", emoji: "📰", bin: "azul", explanation: "Papel limpo e seco pode ser reciclado." },
  { id: 2, name: "Caderno velho", emoji: "📓", bin: "azul", explanation: "As folhas de papel vão para a lixeira azul." },
  { id: 3, name: "Caixa de papelão", emoji: "📦", bin: "azul", explanation: "O papelão é muito reciclado." },
  { id: 4, name: "Revista", emoji: "📖", bin: "azul", explanation: "Revista é feita de papel." },
  { id: 5, name: "Garrafa PET", emoji: "🍾", bin: "vermelha", explanation: "O plástico pode virar tecido e novas embalagens." },
  { id: 6, name: "Sacola plástica", emoji: "🛍️", bin: "vermelha", explanation: "É plástico e pode ser reciclada." },
  { id: 7, name: "Tampinha de garrafa", emoji: "🔴", bin: "vermelha", explanation: "É plástico e vai junto com os outros plásticos." },
  { id: 8, name: "Pote de iogurte", emoji: "🥛", bin: "vermelha", explanation: "Plástico limpo vai na vermelha." },
  { id: 9, name: "Pote de vidro", emoji: "🫙", bin: "verde", explanation: "O vidro pode ser reciclado muitas vezes." },
  { id: 10, name: "Garrafa de vidro", emoji: "🍷", bin: "verde", explanation: "Garrafa de vidro é reciclável." },
  { id: 11, name: "Copo de vidro", emoji: "🥃", bin: "verde", explanation: "O vidro vai na lixeira verde." },
  { id: 12, name: "Vidro de perfume", emoji: "🧴", bin: "verde", explanation: "O frasco de vidro é reciclável." },
  { id: 13, name: "Lata de refrigerante", emoji: "🥫", bin: "amarela", explanation: "O metal pode ser reciclado várias vezes." },
  { id: 14, name: "Lata de milho", emoji: "🌽", bin: "amarela", explanation: "Lata de conserva é metal." },
  { id: 15, name: "Lata de atum", emoji: "🐟", bin: "amarela", explanation: "A lata é de metal." },
  { id: 16, name: "Tampa de metal", emoji: "⚙️", bin: "amarela", explanation: "Tampas de metal vão na amarela." },
  { id: 17, name: "Casca de banana", emoji: "🍌", bin: "marrom", explanation: "Resto de comida vira adubo." },
  { id: 18, name: "Casca de laranja", emoji: "🍊", bin: "marrom", explanation: "É orgânico e pode virar adubo." },
  { id: 19, name: "Borra de café", emoji: "☕", bin: "marrom", explanation: "É orgânico e vira adubo." },
  { id: 20, name: "Casca de ovo", emoji: "🥚", bin: "marrom", explanation: "É orgânico e pode virar adubo." },
  { id: 21, name: "Papel higiênico usado", emoji: "🧻", bin: "cinza", explanation: "Papel sujo não é reciclável." },
  { id: 22, name: "Fralda descartável", emoji: "🧷", bin: "cinza", explanation: "É rejeito e não pode ser reciclada." },
  { id: 23, name: "Bituca de cigarro", emoji: "🚬", bin: "cinza", explanation: "Não é reciclável e contamina o ambiente." },
  { id: 24, name: "Esponja de cozinha", emoji: "🧽", bin: "cinza", explanation: "Não é reciclável." },
];
