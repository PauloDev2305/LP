import { Grupo } from "./Grupo"
import { readFileSync } from 'fs'

interface Entrada {
    // lerEquipes(nomeArquivo: string): Grupo[];
    // lerResultados(nomeArquivo: string): String[];
    lerArquivo(nomeArquivo: string): void;
}

class Entrada implements Entrada {
    lerArquivo(nomeArquivo: string): void {
        var arquivo = readFileSync(nomeArquivo, "utf-8")
        var vetEntrada = arquivo.split('\r\n')
        // \r\n quebra de linha no windows
        let listaGrupos: Grupo[] = new Array<Grupo>()
        for (var i = 0; vetEntrada.length / 6; i++) {
            listaGrupos[i] = new Grupo(vetEntrada[i * 6], vetEntrada.slice(i * 6 + 1, i * 5 + 1))
        }
    }
}

var obj = new Entrada
obj.lerArquivo("Equipes.txt")