const url = 'https://dog.ceo/api/breeds/image/random';

fetch(url)
.then( respuesta => {
    console.log(respuesta)
    return respuesta.json()
})
.then( data => {
    console.log(data);
    let body = document.querySelector('body')
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', `${data.message}`);
    div.appendChild(img);
    body.appendChild(div);

})
.catch( error =>{
    console.log(error);
})