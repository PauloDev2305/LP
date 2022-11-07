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

  set nome(n: string) {
    this._nome = n;
  }
  get nome(): string {
    return this._nome;
  }

  set ponto(pts: number) {
    this._pontos = pts;
  }
  get ponto(): number {
    return this._pontos;
  }

  set vitoria(v: number) {
    this._vitorias = v;
  }
  get vitoria(): number {
    return this._vitorias;
  }

  set derrotas(d: number) {
    this._vitorias = d;
  }
  get derrotas(): number {
    return this._derrotas;
  }

  set empates(e: number) {
    this._empates = e;
  }
  get empates(): number {
    return this._empates;
  }

  set golsMarcados(gm: number) {
    this._golsMarcados = gm;
  }
  get golsMarcados(): number {
    return this._golsMarcados;
  }

  set golsSofridos(gs: number) {
    this._golsSofridos = gs;
  }
  get golsSofridos(): number {
    return this._golsSofridos;
  }

  set saldoGols(sg: number) {
    this._saldoGols = sg;
  }
  get saldoGols(): number {
    return this._saldoGols;
  }
}
