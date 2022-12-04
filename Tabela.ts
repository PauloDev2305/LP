import * as promptSync from "prompt-sync";
var prompt = promptSync();
import { Grupo } from "./Grupo";
import { Entrada } from "./Entrada"

class Tabela {
  private _nomeArquivoGrupos: string;
  private _nomeArquivoPartidas: string;

  private _entrada: Entrada = new Entrada()
  partidas: String[]

  public _listaDeGrupos: Grupo[] = new Array<Grupo>();
  private _iniciado: boolean = false;

  set lista_Grupos(_listaDeGrupos: Grupo[]) {
    this._listaDeGrupos = _listaDeGrupos;
  }
  get lista_Grupos(): Grupo[] {
    return this._listaDeGrupos;
  }

  set iniciado(iniciado: boolean) {
    this._iniciado = iniciado;
  }
  get iniciado() {
    return this._iniciado;
  }

  menu() {
    this.msgAjuda();
    while (true) {
      var comando = prompt("Entre com um comando: ");
      switch (comando.toUpperCase()) {
        case "INICIAR":

          if (this._iniciado == false) {
            this.iniciar();
            this._iniciado = true
          } else {
            console.log('\r\nO comando não pode ser iniciado mais de uma vez!\r\n')
          }

          break;

        case "IMPRIMIR":
          if (this.iniciado == false) {
            console.log("\r\nVocê não pode imprimir sem iniciar o programa. Por favor inicie o programa!\r\n");
            this.msgAjuda()
          } else {
            this.imprimir();
          }

          break;

        case "ENCERRAR":
          if (this.iniciado == false) {
            console.log("\r\nPor favor inicie o programa antes de encerrar!\r\n");
            this.msgAjuda()
            break;
          }
            console.log("O programa foi encerrado. Obrigado pro utilizar nosso programa!");
            this._iniciado = false

          return;

        default:
          console.log("Comando Inválido!\r\n");
          break;
      }
    }
  }

  iniciar() {
    try {
      this._nomeArquivoGrupos = prompt("Entre com arquivos de grupos: ")
      this._nomeArquivoPartidas = prompt("Entre com o aquivos de partidas: ")

      this._listaDeGrupos = this._entrada.lerEquipes(this._nomeArquivoGrupos)
      this.partidas = this._entrada.lerResultados(this._nomeArquivoPartidas)
      this.carregarPartida()

    } catch (error) {
      console.log('\r\nNome(s) do(s) arquivo(s) incorreto(s)! Por favor, insira o arquivo correto!\r\n')
      this.iniciar()
    }
  }

  carregarPartida() {
    for (let grupo in this.partidas) {
      for (let p of this.partidas[grupo]) {
        this._listaDeGrupos[grupo].partida(p)
      }
    }
  }

  imprimir() {
    var grupoImprimir = prompt("Entre com o grupo que deseja imprimir a tabela: ").toUpperCase();
    this._listaDeGrupos[grupoImprimir].imprimir();
    this.msgAjudaProgramaIniciado();
  }

  msgAjuda() {
    console.log("MENU DE COMANDOS ABAIXO");
    console.log("Para iniciar a tabela digite: INICIAR");
    console.log("Para imprimir a tabela digite: IMPRIMIR");
    console.log("Para terminar digite: ENCERRAR");
  }

  msgAjudaProgramaIniciado() {
    console.log("MENU DE COMANDOS A BAIXO");
    console.log("Para imprimir a tabela digite: IMPRIMIR");
    console.log("Para terminar digite: ENCERRAR");
  }

}
var tabela = new Tabela();
tabela.menu();