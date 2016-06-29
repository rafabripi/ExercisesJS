"use strict"

let read = require("./test.js").Lector
let readSync = require("./data/readFile.js").File

//leer archivo from test 1º metodo con callback 2º syncrono 
//la ubicacion del archivo puede cambiar dependeiendo desde que directorio se ejecute node

// read.leerArchivo()
let fileR = readSync.readFileSync("./MOCK_DATA.json")
console.log(fileR)