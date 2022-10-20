//desestructuracion de objetos

const persona = {
    nombre : 'tony',
    edad : 45,
    clave : 'Ironman',
    // rango: 'Soldado',
}

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const contexto = ({nombre,edad,rango = 'Capitan',clave})=>{
    // console.log(nombre,edad,rango);
     
    return{
        nombreClave : clave,
        anios : edad,
        latLng : {
            lat : 12.3412,
            lng : -13.2134,
        }
    };

};

const {nombreClave, anios, latLng: {lat ,lng }} = contexto(persona);

console.log(nombreClave, anios);
console.log(lat , lng);