const persona = {
    nombre : 'Tony',
    apellido : 'Stark',
    edad : 45,
    direccion : {
        ciudad : "New york",
        zip : 12343456,
        lat : 12.324234,
        lng : 15.11234,
    }


};
//log in console normal

const persona2 = {... persona};
persona2.nombre = 'peter';
console.log({persona});
 console.log({persona2});
 
 // log in table
//  console.table({persona});