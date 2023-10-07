function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)}


// const offset = 0
// const limit = 10
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi (pokemon) {
    return `
        <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>

                <img src="${pokemon.sprites.other.dream_world.front_default}" 
                alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeAPI.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})