
// const getImagesPromesa = () =>
//     new Promise(resolve => resolve('https://api.giphy.com'));    

const getimagen = async () => {

    try {
        const apiKey = 'BAnY9MOoTm7anNMo3AxtB3P7oQMUBDId';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json()

        const { url } = await data.images.original;
        const img = document.createElement('img');
        img.src = url
        document.body.append(img);

        console.log(url);

    } catch (e) {
        //manejo del error
        console.error(e)

    }


}

getimagen();
