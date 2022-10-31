"use strict";
exports.__esModule = true;
// import { Grupo } from "./Grupo"
var fs_1 = require("fs");
var Entrada = /** @class */ (function () {
    function Entrada() {
    }
    Entrada.prototype.lerResultados = function (nomeArquivo) {
        return new Array();
    };
    Entrada.prototype.lerArquivo = function (nomeArquivo) {
        var arquivo = (0, fs_1.readFileSync)(nomeArquivo, "utf-8");
        console.log(arquivo);
    };
    return Entrada;
}());
var obj = new Entrada;
obj.lerArquivo("Equipes.txt");
//https://stackoverflow.com/questions/33643107/read-and-write-a-text-file-in-typescript
