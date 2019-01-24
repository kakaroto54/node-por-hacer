const argv = require('./config/yargs').argv

const color = require('colors');


const porHacer = require('./por-hacer/por-Hacer.js');

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear("hola mundo");
        console.log(tarea);
    break;

    case 'listar':

        let listado = porHacer.getListado();

        for(let tarea of listado){
            console.log('=== POR HACER=='.red);
            console.log(tarea.descripcion.blue);
        }

        console.log('Mostrar todas las tareas por hacer');
    break;

    case 'actualizar':
        console.log('Actualizar una tarea por hacer');
    break;

    default:
     console.log('comando no es reconocido');
}