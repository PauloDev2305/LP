import * as promptSync from "prompt-sync";
var prompt = promptSync();
import { Grupo } from "./Grupos";

// A classe tabela é composto por grupo e por sua vez e composta por seleção
class Tabela {
  public ListaGrupos: Grupo[] = new Array<Grupo>();
  private Iniciado: boolean = false; // Criando o atributo iniciar para ter o controle de não permitir que o programa seja iniciado mais de uma vez!

  set lista_Grupos(listaDeGrupos: Grupo[]) {
    this.ListaGrupos = listaDeGrupos;
  }
  get lista_Grupos(): Grupo[] {
    return this.ListaGrupos;
  }

  set iniciado(iniciado: boolean) {
    this.Iniciado = iniciado;
  }
  get iniciado() {
    return this.Iniciado;
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
          this.Iniciar();
          break;

        case "LER PARTIDA":
          this.LerPartida();
          break;

        case "IMPRIMIR":
          this.Imprimir();
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
  CriarGrupos() {
    this.ListaGrupos["A"] = new Grupo("A");
    this.ListaGrupos["B"] = new Grupo("B");
    this.ListaGrupos["C"] = new Grupo("C");
    this.ListaGrupos["D"] = new Grupo("D");
    this.ListaGrupos["E"] = new Grupo("E");
    this.ListaGrupos["F"] = new Grupo("F");
    this.ListaGrupos["G"] = new Grupo("G");
    this.ListaGrupos["H"] = new Grupo("H");
  }

  // Iniciando a tabela
  Iniciar() {
    if (this.Iniciado == false) {
      this.Iniciado = true;
      this.CriarGrupos();
      console.log("\nO programa foi iniciado!");
      this.msgAjudaProgramaIniciado();
    } else {// Caso o usuario tente iniciar o programa de novo
      console.log("\nO programa já foi iniciado, por favor tente outro comando!");
      this.msgAjudaProgramaIniciado();
    }
  }

  LerPartida() {
    while (true) {
      if (this.iniciado == true) {
        var grupo = prompt("Entre com o Grupo: ").toUpperCase();
        var partida = prompt("Informe a partida: ").toUpperCase();
        this.ListaGrupos[grupo].Partida(partida);
        var continuar = prompt("Deseja ler outra partida? (S/N)").toUpperCase();
        // Caso o usuário queira informar outra partida
        if (continuar == "N") {
          this.msgAjudaProgramaIniciado();
          break;
        }
      } else {
        console.log("\nVocê não pode Ler partida, o programa ainda não foi iniciado");
        break;
      }
    }
  }

  Imprimir() {
    var grupoImprimir = prompt("Entre com o grupo que deseja imprimir a tabela: ").toUpperCase();
    this.ListaGrupos[grupoImprimir].Imprimir();
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
    if (this.Iniciado == false) {
      this.msgAjuda();
    } else {
      this.msgAjudaProgramaIniciado();
    }
  }
}
var tabela = new Tabela();
tabela.menu();
