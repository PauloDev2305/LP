// import { Grupo } from "./Grupo"
import { readFileSync } from 'fs'

interface Entrada {
    // lerEquipes(nomeArquivo: string): Grupo[];
    lerResultados(nomeArquivo: string): String[];
    lerArquivo(nomeArquivo: string): void;
}

class Entrada implements Entrada {
    lerResultados(nomeArquivo: string): String[] {
        return new Array<string>();
    }

    lerArquivo(nomeArquivo: string): void {
        var arquivo = readFileSync(nomeArquivo, "utf-8")
        
        console.log(arquivo);

    }
}

var obj = new Entrada
obj.lerArquivo("Equipes.txt")
//https://stackoverflow.com/questions/33643107/read-and-write-a-text-file-in-typescript