import * as promptSync from "prompt-sync";
var prompt = promptSync();
import { Selecao } from "./Selecao";

// A classe grupo e composta por seleção
export class Grupo {
  private Nome_do_Grupo: string;
  // Criando uma lista de seleções
  private listaSelecoes: Selecao[] = new Array<Selecao>();

  // Nome Do Grupo
  set nomeG(ng: string) {
    this.Nome_do_Grupo = ng;
  }
  get nomeG(): string {
    return this.Nome_do_Grupo;
  }

  //Lista de Seleções
  set Selecao(lista_de_selecoes: Selecao[]) {
    this.listaSelecoes = lista_de_selecoes;
  }
  get Selecao(): Selecao[] {
    return this.listaSelecoes;
  }

  constructor(nome: string) {
    this.Nome_do_Grupo = nome;
    console.log(`Criando um grupo ${this.Nome_do_Grupo}`);
    this.listaSelecoes = [];
    var sel;
    // toUpperCasa() transforma todas as string em maiúcula
    sel = prompt("Entre com a Seleção 1: ").toUpperCase();
    this.listaSelecoes[0] = new Selecao(sel);

    sel = prompt("Entre com a Seleção 2: ").toUpperCase();
    this.listaSelecoes[1] = new Selecao(sel);

    sel = prompt("Entre com a Seleção 3: ").toUpperCase();
    this.listaSelecoes[2] = new Selecao(sel);

    sel = prompt("Entre com a Seleção 4: ").toUpperCase();
    this.listaSelecoes[3] = new Selecao(sel);
  }

  // Fazendo a comparação para atualizar a ordem da tabela
  Compare() {
    this.listaSelecoes.sort(function compare(a, b) {
      // 1° por pontos
      if (a.ponto < b.ponto) {
        return -1;
      }
      if (a.ponto > b.ponto) {
        return 1;
      }

      // 2° por saldo de  gols
      if (a.ponto == b.ponto) {
        if (a.
          saldoGols < b.saldoGols) {
          return -1;
        }
        if (a.saldoGols > b.saldoGols) {
          return 1;
        }

        // 3° por gols marcados
        if (a.saldoGols == b.saldoGols) {
          if (a.golsMarcados < b.golsMarcados) {
            return -1;
          }
          if (a.golsMarcados < b.golsMarcados) {
            return -1;
          }
        }
      }
      return 0;
    });
    // Inverte a tabela
    this.listaSelecoes.reverse();
  }

  // Método que imprime a tabela de um determinado grupo com suas 4 seleções
  Imprimir() {
    this.Compare();
    console.table(this.listaSelecoes);
  }

  // Atualizada a tabela comforme o time perde, ganha ou empatar
  private AtualizarTabela(S1: string, golS1: number, S2: string, golS2: number): void {
    // Coso a seleção 1 ganha ela ira receber esses atributos
    if (golS1 > golS2) {
      //Esta percorrendo array de Lista de seleções
      for (const sel of this.listaSelecoes) {
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
      for (const sel of this.listaSelecoes) {
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
      for (const sel of this.listaSelecoes) {
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
