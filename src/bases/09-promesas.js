//promesa

import { getHeroeById } from './bases/08-imp-exp'
import heroes from './data/heroes';




// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1 = getHeroeById(2);
//         reject(p1);
//         reject('no se pudo encontar el heroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('then de la promesa', heroe);
// }).catch(err => console.error(err));


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1)
            }
            else {

                reject('no se pudo encontar el heroe');
            }

        }, 2000);
    });
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);