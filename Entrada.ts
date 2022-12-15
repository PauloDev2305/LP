import { Grupo } from './Grupo'
import { readFileSync } from 'fs'

interface IEntrada {
    lerEquipes(nomeArquivo: string): Grupo[];
    lerResultados(nomeArquivo: string): String[];
    lerComandos(): any
}

export class Entrada implements IEntrada {
    lerEquipes(nomeArquivo: string): Grupo[] {
        var arquivo = readFileSync(nomeArquivo, "utf-8")
        var vetEntrada = arquivo.split('\n')

        let listaGrupos: Grupo[] = new Array<Grupo>();

        for (let i = 0; i < vetEntrada.length / 6; i++) {
            listaGrupos[vetEntrada[i * 6]] = new Grupo(vetEntrada[i * 6], vetEntrada.slice(i * 6 + 1, i * 6 + 5));
        }

        return listaGrupos
    }

    lerResultados(nomeArquivo: string): string[] {
        var arquivo = readFileSync(nomeArquivo, "utf-8")
        var vetResultado = arquivo.split('\n')

        let vetorPartidas = new Array();

        for (let i = 0; i < vetResultado.length; i++) {
            let novoVetPartidas = vetResultado[i].split('-');

            if (vetorPartidas[novoVetPartidas[0]] == null) {
                vetorPartidas[novoVetPartidas[0]] = [];
            }

            vetorPartidas[novoVetPartidas[0]].push(novoVetPartidas[1]);
        }

        return vetorPartidas
    }

    lerComandos():any {
        let comando = readFileSync("src/Comandos.txt", 'utf-8')
        let listaDeCoamandos = comando.split("\n")

        let vetComandos

        for (let i = listaDeCoamandos.length -1; i >= 0; i--) {
            vetComandos = listaDeCoamandos[i]
            console.log(vetComandos);
        }
         return vetComandos
    }
}
var a = new Entrada
a.lerComandos()