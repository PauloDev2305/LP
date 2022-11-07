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
        var vetResultado = arquivo.split(' ')
        
        var listaResultados: String[] = new Array<String>()

        console.log(vetResultado)
        return listaResultados
    }
}

var obj = new Entrada
// obj.lerEquipes("./src/Equipes.txt")
obj.lerResultados("./src/Resultado.txt")