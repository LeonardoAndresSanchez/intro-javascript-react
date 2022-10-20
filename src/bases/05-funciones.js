// funciones

const  saludar = function (nombre){
    return `Hola, ${nombre}`;
};
const  saludar2 =  (nombre)=>{
    return `Hola, ${nombre}`;
};
const  saludar3 =  (nombre)=> `Hola, ${nombre}`;
const  saludar4 =  ()=> `Hola mundo`;


// console.log( saludar('Goku'));
// console.log( saludar2('vegeta'));
// console.log( saludar3('goku'));
console.log( saludar4());


const getUser = ()=>
    ({
    uid : 'aw890peufawef',
    userName : 'EL GOrdis',
    });
    const user = getUser();
    console.log(user);
    console.log(getUser());


const getUsuarioActivo = (nombre) => ( {
        uid : '12f31we',
        userName : nombre,
    });


const usuarioActivo = getUsuarioActivo('Leonardo');
console.log(usuarioActivo);