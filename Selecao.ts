// Criando uma classe de seleções
export class Selecao {
  private _nome: string;
  private _pontos: number;
  private _vitorias: number;
  private _derrotas: number;
  private _empates: number;
  private _golsMarcados: number;
  private _golsSofridos: number;
  private _saldoGols: number;

  // Inicia apenas o nome por conta de outras atributos já foram iniciados
  constructor(nome: string) {
    this._nome = nome;
    this._pontos = 0;
    this._vitorias = 0;
    this._derrotas = 0;
    this._empates = 0;
    this._golsMarcados = 0;
    this._golsSofridos = 0;
    this._saldoGols = 0;
  }

  // Geters e Seters por que os atributos são privados
  // Nome
  set nome(n: string) {
    this._nome = n;
  }
  get nome(): string {
    return this._nome;
  }

  // Pontos
  set ponto(pts: number) {
    this._pontos = pts;
  }
  get ponto(): number {
    return this._pontos;
  }

  // Vitorias
  set vitoria(v: number) {
    this._vitorias = v;
  }
  get vitoria(): number {
    return this._vitorias;
  }

  // Derrotas
  set derrotas(d: number) {
    this._vitorias = d;
  }
  get derrotas(): number {
    return this._derrotas;
  }

  // Empates
  set empates(e: number) {
    this._empates = e;
  }
  get empates(): number {
    return this._empates;
  }

  // Gols marcados
  set golsMarcados(gm: number) {
    this._golsMarcados = gm;
  }
  get golsMarcados(): number {
    return this._golsMarcados;
  }

  // Gols sofridos
  set golsSofridos(gs: number) {
    this._golsSofridos = gs;
  }
  get golsSofridos(): number {
    return this._golsSofridos;
  }

  // Saldo de Gols
  set saldoGols(sg: number) {
    this._saldoGols = sg;
  }
  get saldoGols(): number {
    return this._saldoGols;
  }
}
