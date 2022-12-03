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

  // Menu de comandos
  menu() {
    // Caso vc coloque uma msg errada ele vai te dar as instruções correta
    this.msgAjuda();
    // Assumindo que esse laço vai ser sempre verdadeiro
    while (true) {
      var comando = prompt("Entre com um comando: ");
      // É um if e else inteligente
      switch (comando.toUpperCase()) {
        case "INICIAR":

        if (this._iniciado == false) {
            this.iniciar();
            this._iniciado = true
          } else {
            console.log('O comando não pode ser iniciado mais de uma vez!')
          }

          break;

        case "LER PARTIDA":
          this.carregarPartida();
          break;

        case "IMPRIMIR":
          this.imprimir();
          break;

        case "ENCERRAR":
          console.log("O programa foi encerrado. Obrigado pro utilizar nosso programa!");
          this._iniciado = false
          return;

        default:
          console.log("\nComando Inválido!");
          break;
      }
    }
  }

  // Iniciando a tabela
  iniciar() {
    try {
      this._nomeArquivoGrupos = prompt("Entre com arquivos de grupos: ")
      this._nomeArquivoPartidas = prompt("Entre com o aquivos de partidas: ")

      this._listaDeGrupos = this._entrada.lerEquipes(this._nomeArquivoGrupos)
      this.partidas = this._entrada.lerResultados(this._nomeArquivoPartidas)
      this.carregarPartida()

    } catch (error) {
      console.log('Nome(s) do(s) arquivo(s) incorreto(s)! Por favor, insira o arquivo correto.')
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

  // Mensagem de ajuda quando o programa ainda não foi iniciado
  msgAjuda() {
    console.log("MENU DE COMANDOS ABAIXO");
    console.log("Para iniciar a tabela digite: INICIAR");
    console.log("Para ler partida digite: Ler partida");
    console.log("Para imprimir a tabela digite: IMPRIMIR");
    console.log("Para terminar digite: ENCERRAR");
  }

  // Mensagem de ajuda quando o programa é iniciado
  msgAjudaProgramaIniciado() {
    console.log("MENU DE COMANDOS A BAIXO");
    console.log("Para ler partida digite: Ler partida");
    console.log("Para imprimir a tabela digite: IMPRIMIR");
    console.log("Para terminar digite: ENCERRAR");
  }

}
var tabela = new Tabela();
tabela.menu();