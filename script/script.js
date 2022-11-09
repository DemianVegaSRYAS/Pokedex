console.log (' I am calling a pokeapi ');
let pokemon = null;
let id = null; 

const pokeimage = document.getElementById('poke_image');
const pokename = document.getElementById('poke_name');
const pokeinfo = document.getElementById('poke_info');
const searchBox = document.getElementById('search_box');
const button = document.getElementById('submit');

button.addEventListener('click', (e) => {
    id = searchBox.value;
    console.log(searchBox.value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
        method: 'GET'
    }).then(response =>response.json().then(data => {
        pokemon = data
        // console.log(data)
        pokeimage.setAttribute('src', pokemon.sprites.front_default)
        pokename.innerText += pokemon.name;
        pokeinfo.innerHTML += `<span id='height'> Height: ${pokemon.height}</span><span id='weight'>Weight: ${pokemon.weight}</span>`
    }))
})

