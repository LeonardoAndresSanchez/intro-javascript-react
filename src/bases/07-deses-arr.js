//desestructuracion de arreglos

const personajes = ['goku','vegetta','trunks'];

const [,,p3] = personajes;
console.log(p3);

const regresaArreglo = ()=>{
    return ['abc',1234];
}

const [letras, numeros] = regresaArreglo();
console.log(letras,numeros);


 const use =(valor) =>{
    return [valor,()=>{console.log('hola Mundo')}];
 }
 const [nombre, setNombre] = use('goku');
 console.log(nombre);
 setNombre();