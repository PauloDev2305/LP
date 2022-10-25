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
  Imprimir() {
    this.ordenarSelecoes();
    console.table(this._listaSelecoes);
  }

  // Atualizada a tabela comforme o time perde, ganha ou empatar
  private AtualizarTabela(S1: string, golS1: number, S2: string, golS2: number): void {
    // Coso a seleção 1 ganha ela ira receber esses atributos
    if (golS1 > golS2) {
      //Esta percorrendo array de Lista de seleções
      for (const sel of this._listaSelecoes) {
        if (sel.nome == S1) {
          sel.nome = S1;
          sel.golsMarcados += golS1;
          sel.golsSofridos += golS2;
          sel.saldoGols += golS1 - golS2;
          sel.ponto += 3;
          sel.vitoria++;
        }

        // Caso a seleção 2 perde ela ira receber esses atributos
        if (sel.nome == S2) {
          sel.nome = S2;
          sel.golsMarcados += golS2;
          sel.golsSofridos += golS1;
          sel.saldoGols += golS2 - golS1;
          sel.derrotas++;
        }
      }
    }

    // Caso a seleção 2 ganha ela ira receber esses atributos
    if (golS1 < golS2) {
      for (const sel of this._listaSelecoes) {
        if (sel.nome == S2) {
          sel.golsMarcados += golS2;
          sel.golsSofridos += golS1;
          sel.saldoGols += golS2 - golS1;
          sel.ponto += 3;
          sel.vitoria++;
        }

        if (sel.nome == S1) {
          sel.golsMarcados += golS1;
          sel.golsSofridos += golS2;
          sel.saldoGols += golS1 - golS2;
          sel.derrotas++;
        }
      }
    }

    // Caso alguma seleção empartar
    if (golS1 == golS2) {
      for (const sel of this._listaSelecoes) {
        // os dados são iguais pois a seleção empatou então elas vão receber os mesmos atributos
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
  Partida(resultadoPartida: string): void {
    var partida = resultadoPartida.split(" ");  // .split particiona a string sempre que, neste caso, é encontrado um espaço, separando em um "array de strings"
    // Colocando cada dado em uma posição do Array(AtualizarTabela)
    this.AtualizarTabela(partida[0], Number(partida[1]), partida[4], Number(partida[3])); // Chamando o método atualizarTabela, colocando como parâmetros o nome da sel1 e seus gols, os gols da sel2 e seu nome, segundo suas posições no array partida.
  }
}
