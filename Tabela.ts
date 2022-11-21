import * as promptSync from "prompt-sync";
var prompt = promptSync();
import { Grupo } from "./Grupo";

// A classe tabela é composto por grupo e por sua vez e composta por seleção
class Tabela {
  private _nomeArquivoGrupos: String;
  private _nomeArquivoPartidas: String;
  public listaDeGrupos: Grupo[] = new Array<Grupo>();
  private _iniciado: boolean = false; // Criando o atributo iniciar para ter o controle de não permitir que o programa seja iniciado mais de uma vez!

  set lista_Grupos(listaDeGrupos: Grupo[]) {
    this.listaDeGrupos = listaDeGrupos;
  }
  get lista_Grupos(): Grupo[] {
    return this.listaDeGrupos;
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
      switch (comando.toUpperCase() /* se o comando for igual a algum que está especificado entra no case*/) {
        case "INICIAR":
          this.iniciar();
          break;

        case "LER PARTIDA":
          this.lerPartida();
          break;

        case "IMPRIMIR":
          this.imprimir();
          break;

        case "ENCERRAR":
          console.log("O programa foi encerrado, obrigado pro utilizar nosso programa!");
          return;

        default:
          console.log("\nComando Inválido!");
          this.comandoInvalido()
          break;
      }
    }
  }

  // Criando grupos da tabela
  criarGrupos() {

    for (var i = 0; i <= this.listaDeGrupos.length; i++) {
      this.listaDeGrupos = new Grupo["Algum valor"]
    }
  }

  // Iniciando a tabela
  iniciar() {
    this._nomeArquivoPartidas = prompt("Entre com o aquivos de grupos: ");
    this._nomeArquivoGrupos = prompt("Entre com arquivos de grupos")
  }

  lerPartida() {
    
  }

  imprimir() {
    var grupoImprimir = prompt("Entre com o grupo que deseja imprimir a tabela: ").toUpperCase();
    this.listaDeGrupos[grupoImprimir].imprimir();
    this.msgAjudaProgramaIniciado();
  }

  // Mensagem de ajuda quando o programa ainda não foi iniciado
  msgAjuda() {
    console.log("MENU DE COMANDOS A BAIXO");
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

  // Mensagem caso o comando seja Inválido
  comandoInvalido() {
    if (this._iniciado == false) {
      this.msgAjuda();
    } else {
      this.msgAjudaProgramaIniciado();
    }
  }
}
var tabela = new Tabela();
tabela.menu();
