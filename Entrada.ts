import { Grupo } from './Grupo'
import { readFileSync } from 'fs'

interface IEntrada {
    lerEquipes(nomeArquivo: string): Grupo[];
    lerResultados(nomeArquivo: string): String[];
}

export class Entrada implements IEntrada {
    lerEquipes(nomeArquivo: string): Grupo[] {
        var arquivo = readFileSync(nomeArquivo, "utf-8")
        var vetEntrada = arquivo.split('\r\n')

        let listaGrupos: Grupo[] = new Array<Grupo>();

        for (let i = 0; i < vetEntrada.length / 6; i++) {
            listaGrupos[vetEntrada[i * 6]] = new Grupo(vetEntrada[i * 6], vetEntrada.slice(i * 6 + 1, i * 6 + 5));
        }

        return listaGrupos
    }

    lerResultados(nomeArquivo: string): string[] {
        var arquivo = readFileSync(nomeArquivo, "utf-8")
        var vetResultado = arquivo.split('\r\n')

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
}