import { Grupo } from './Grupo'
import { readFileSync } from 'fs'

interface Entrada {
    lerEquipes(nomeArquivo: string): Grupo[];
    lerResultados(nomeArquivo: string): String[];
    // lerArquivo(nomeArquivo: string): void;
}

class Entrada implements Entrada {
    lerEquipes(nomeArquivo: string): Grupo[] {
        var arquivo = readFileSync(nomeArquivo, "utf-8")
        var vetEntrada = arquivo.split('\r\n')

        let listaGrupos: Grupo[] = new Array<Grupo>()

        for (let i = 0; i < vetEntrada.length / 6; i++) {
            listaGrupos[i] = new Grupo(vetEntrada[i * 6], vetEntrada.slice(i * 6 + 1, i * 6 + 5))
            console.log(listaGrupos[i])

        }

        return listaGrupos
    }

    lerResultados(nomeArquivo: string): String[] {
        var arquivo = readFileSync(nomeArquivo, "utf-8")
        var vetResultado = arquivo.split('\r\n')

        var listaResultados: String[] = new Array<String>()
        var vetorPartidas = new Array()

        for (var i = 0; i < vetResultado.length; i++) {
            var novoVetPartidas = vetResultado[i].split('-')

            if (vetorPartidas[novoVetPartidas[0]] == null) {
                vetorPartidas[novoVetPartidas[0]] = [];
            }
            vetorPartidas[novoVetPartidas[0]].push(novoVetPartidas[1]);
        }
        console.log(vetorPartidas);

        return listaResultados
    }
}

var obj = new Entrada
obj.lerResultados("./src/Resultado.txt")