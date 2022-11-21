"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grupo_1 = require("./Grupo");
const fs_1 = require("fs");
class Entrada {
    lerEquipes(nomeArquivo) {
        var arquivo = fs_1.readFileSync(nomeArquivo, "utf-8");
        var vetEntrada = arquivo.split('\n');
        let listaGrupos = new Array();
        for (let i = 0; i < vetEntrada.length / 6; i++) {
            listaGrupos[i] = new Grupo_1.Grupo(vetEntrada[i * 6], vetEntrada.slice(i * 6 + 1, i * 6 + 5));
            console.log(listaGrupos[i]);
        }
        return listaGrupos;
    }
    lerResultados(nomeArquivo) {
        var arquivo = fs_1.readFileSync(nomeArquivo, "utf-8");
        var vetResultado = arquivo.split('\n');
        var vetorPartidas = new Array();
        for (var i = 0; i < vetResultado.length; i++) {
            var novoVetPartidas = vetResultado[i].split('-');
            if (vetorPartidas[novoVetPartidas[0]] == null) {
                vetorPartidas[novoVetPartidas[0]] = [];
            }
            vetorPartidas[novoVetPartidas[0]].push(novoVetPartidas[1]);
        }
        console.log(vetorPartidas);
        return vetorPartidas;
    }
}
var obj = new Entrada;
obj.lerResultados("./src/Resultado.txt");
