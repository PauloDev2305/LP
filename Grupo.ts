import { Selecao } from "./Selecao";

export class Grupo {
  private _nomeDoGrupo: string;
  private _listaSelecoes: Selecao[] = new Array<Selecao>();

  set nomeDoGrupo(ng: string) {
    this._nomeDoGrupo = ng;
  }
  
  get nomeDoGrupo(): string {
    return this._nomeDoGrupo;
  }

  set Selecao(lista_de_selecoes: Selecao[]) {
    this._listaSelecoes = lista_de_selecoes;
  }
  get Selecao(): Selecao[] {
    return this._listaSelecoes;
  }

  constructor(nome: string, quatroSelecoes: string[]) {
    this._nomeDoGrupo = nome;
    this._listaSelecoes = [];

    for (let i = 0; i < 4; i++) {
      this._listaSelecoes[i] = new Selecao(quatroSelecoes[i])
    }
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
    if (golS1 < golS2) {
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

  partida(resultadoPartida: string): void {
    var partida = resultadoPartida.split(" ");
    this.atualizarTabela(partida[0], Number(partida[1]), partida[4], Number(partida[3]));
  }

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

  imprimir() {
    this.ordenarSelecoes();
    console.table(this._listaSelecoes);
  }

}
