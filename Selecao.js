"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Criando uma classe de seleções
class Selecao {
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
    set nome(n) {
        this._nome = n;
    }
    get nome() {
        return this._nome;
    }
    set ponto(pts) {
        this._pontos = pts;
    }
    get ponto() {
        return this._pontos;
    }
    set vitoria(v) {
        this._vitorias = v;
    }
    get vitoria() {
        return this._vitorias;
    }
    set derrotas(d) {
        this._vitorias = d;
    }
    get derrotas() {
        return this._derrotas;
    }
    set empates(e) {
        this._empates = e;
    }
    get empates() {
        return this._empates;
    }
    set golsMarcados(gm) {
        this._golsMarcados = gm;
    }
    get golsMarcados() {
        return this._golsMarcados;
    }
    set golsSofridos(gs) {
        this._golsSofridos = gs;
    }
    get golsSofridos() {
        return this._golsSofridos;
    }
    set saldoGols(sg) {
        this._saldoGols = sg;
    }
    get saldoGols() {
        return this._saldoGols;
    }
}
exports.Selecao = Selecao;
