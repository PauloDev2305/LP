"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selecao = void 0;
// Criando uma classe de seleções
class Selecao {
    // Inicia apenas o nome por conta de outras atributos já foram iniciados
    constructor(nome) {
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
    set nome(n) {
        this._nome = n;
    }
    get nome() {
        return this._nome;
    }
    // Pontos
    set ponto(pts) {
        this._pontos = pts;
    }
    get ponto() {
        return this._pontos;
    }
    // Vitorias
    set vitoria(v) {
        this._vitorias = v;
    }
    get vitoria() {
        return this._vitorias;
    }
    // Derrotas
    set derrotas(d) {
        this._vitorias = d;
    }
    get derrotas() {
        return this._derrotas;
    }
    // Empates
    set empates(e) {
        this._empates = e;
    }
    get empates() {
        return this._empates;
    }
    // Gols marcados
    set golsMarcados(gm) {
        this._golsMarcados = gm;
    }
    get golsMarcados() {
        return this._golsMarcados;
    }
    // Gols sofridos
    set golsSofridos(gs) {
        this._golsSofridos = gs;
    }
    get golsSofridos() {
        return this._golsSofridos;
    }
    // Saldo de Gols
    set saldoGols(sg) {
        this._saldoGols = sg;
    }
    get saldoGols() {
        return this._saldoGols;
    }
}
exports.Selecao = Selecao;
