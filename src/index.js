document.addEventListener("DOMContentLoaded", function() {
  let flipped = false;
  const searchBar = document.querySelector('#pokemon-search-input')
  //pokemons is a variable imported from db.json via index.html as a script tag

  searchBar.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    const filteredPokemon = pokemons.filter((pokemon) => {
      return pokemon.name.includes(e.target.value);
    })
    if (e.target.value.length === 0) {
      document.querySelector('center').innerHTML = '';
      return;
    }
      render(filteredPokemon); 

    })

    function render(items) {
      document.querySelector('center').innerHTML = '';
      items.forEach((pokemon) => {
        
        document.querySelector('center').innerHTML += 
        `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img src="${pokemon.sprites.front}" id="${pokemon.name}">          </div>
            </div>
            <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
          </div>
          </div>`
      })
    }
  const paragraphs = document.querySelectorAll('.flip-image');
  paragraphs.forEach((paragraph) => {
    paragraph.addEventListener('click', function (e) {
      const image = e.target.parentElement.children[1].children[0].children[0]
      flipped = !flipped
      // console.log(flipped)
      if (flipped) {
        image.src = pokemons.find((pokemon) => { return pokemon.name === image.id }).sprites.back;
      }
      else {
        image.src = pokemons.find((pokemon) => { return pokemon.name === image.id }).sprites.front;

      }
    })
  })


})
