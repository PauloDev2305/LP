import { Grupo } from "./Grupo"
interface Entrada{
    lerEquipes(nomeArquivo: string): Grupo[];
    lerResultados(nomeArquivo: string): Grupo[];
}

class Entrada implements Entrada {

}

