"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grupo_1 = require("./Grupo");
const fs_1 = require("fs");
class Entrada {
    lerEquipes(nomeArquivo) {
        var arquivo = (0, fs_1.readFileSync)(nomeArquivo, "utf-8");
        var vetEntrada = arquivo.split('\r\n');
        let listaGrupos = new Array();
        for (let i = 0; i < vetEntrada.length / 6; i++) {
            listaGrupos[i] = new Grupo_1.Grupo(vetEntrada[i * 6], vetEntrada.slice(i * 6 + 1, i * 6 + 5));
            console.log(listaGrupos[i]);
        }
        return listaGrupos;
    }
    lerResultados(nomeArquivo) {
        var arquivo = (0, fs_1.readFileSync)(nomeArquivo, "utf-8");
        var vetResultado = arquivo.split(' ');
        var listaResultados = new Array();
        console.log(vetResultado);
        return listaResultados;
    }
}
var obj = new Entrada;
// obj.lerEquipes("./src/Equipes.txt")
obj.lerResultados("./src/Resultado.txt");
