import * as promptSync from "prompt-sync";
var prompt = promptSync();
import { Selecao } from "./Selecao";

// A classe grupo e composta por seleção
export class Grupo {
  private _nomeGrupo: string;
  // Criando uma lista de seleções
  private _listaSelecoes: Selecao[] = new Array<Selecao>();

  // Nome Do Grupo
  set nomeDoGrupo(ng: string) {
    this._nomeGrupo = ng;
  }
  get nomeDoGrupo(): string {
    return this._nomeGrupo;
  }

  //Lista de Seleções
  set Selecao(lista_de_selecoes: Selecao[]) {
    this._listaSelecoes = lista_de_selecoes;
  }
  get Selecao(): Selecao[] {
    return this._listaSelecoes;
  }

  constructor(nome: string) {
    this._nomeGrupo = nome;
    this._listaSelecoes = [];

    for (let i = 0; i < 4; i++) {
      let sel = prompt(`Entre com a Seleção ${i + 1}: `).toUpperCase()
      this._listaSelecoes[i] = new Selecao(sel)
    }
  }

  // Fazendo a comparação para atualizar a ordem da tabela
  private ordenarSelecoes() {
    this._listaSelecoes.sort(function compare(a, b) {
      if (a.ponto < b.ponto) {
        return -1;
      } else if (a.ponto > b.ponto) {
        return 1;
      } else {
        if (a.saldoGols < b.saldoGols) {
          return -1;
        } else if (a.saldoGols > b.saldoGols) {
          return 1;
        } else {
          if (a.golsMarcados < b.golsMarcados) {
            return -1;
          }
          if (a.golsMarcados > b.golsMarcados) {
            return 1;
          }
        }
      }
      return 0;
    });
    // Inverte a tabela
    this._listaSelecoes.reverse();
  }

  // Método que imprime a tabela de um determinado grupo com suas 4 seleções
  imprimir() {
    this.ordenarSelecoes();
    console.table(this._listaSelecoes);
  }

  private atualizarVitoria(vitorioso: string, golsV: number, derrotado: string, golsD: number) {
    for (const sel of this._listaSelecoes) {
      if (sel.nome == vitorioso) {
        sel.nome = vitorioso;
        sel.golsMarcados += golsV;
        sel.golsSofridos += golsD;
        sel.saldoGols += golsV - golsD;
        sel.ponto += 3;
        sel.vitoria++;
      }

      if (sel.nome == derrotado) {
        sel.nome = derrotado;
        sel.golsMarcados += golsD;
        sel.golsSofridos += golsV;
        sel.saldoGols += golsD - golsV;
        sel.derrotas++;
      }
    }
  }

  private atualizarTabela(S1: string, golS1: number, S2: string, golS2: number): void {
    if (golS1 > golS2) {
      this.atualizarVitoria(S1, golS1, S2, golS2)
    }
    if (golS1 > golS2) {
      this.atualizarVitoria(S2, golS2, S1, golS1)
    }

    if (golS1 == golS2) {
      for (const sel of this._listaSelecoes) {
        if (sel.nome == S1 || sel.nome == S2) {
          sel.golsMarcados += golS2;
          sel.golsSofridos += golS1;
          sel.ponto++;
          sel.empates++;
        }
      }
    }
  }


  // método que serve para ler uma partida, uma string. O padrão é: sel1 nºdeGols x nºdeGols sel2 
  partida(resultadoPartida: string): void {
    var partida = resultadoPartida.split(" ");  // .split particiona a string sempre que, neste caso, é encontrado um espaço, separando em um "array de strings"
    // Colocando cada dado em uma posição do Array(AtualizarTabela)
    this.atualizarTabela(partida[0], Number(partida[1]), partida[4], Number(partida[3])); // Chamando o método atualizarTabela, colocando como parâmetros o nome da sel1 e seus gols, os gols da sel2 e seu nome, segundo suas posições no array partida.
  }
}
