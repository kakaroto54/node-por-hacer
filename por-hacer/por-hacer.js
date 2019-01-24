const fs = require('fs');



let listadoPorHacer = [];

const guardarDB = () =>{

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json',data,(err)=>{
        if(err)throw new Error('no se pudo grabar');
    })
}


const cargarDB = () =>{

    listadoPorHacer = require('../db/data.json');
    console.log(listadoPorHacer);
}

const crear = (descripcion)=>{

    cargarDB();


   /*  let porHacer= {
        descripcion,
        completado:false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer; */
}

const getListado=() =>{
    cargarDB();
    return listadoPorHacer;
}

module.exports={
    crear,
    getListado
}