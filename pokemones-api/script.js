function CargarPokemones() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((result) => {
        const pokemones = result.data.results;
        
        pokemones.map((pokemon) => {
          const { name, url } = pokemon;
            
          const myArray = url.split("/");       
          let id = myArray[myArray.length - 2]          
          document.querySelector("#listado").innerHTML += `
            <li>
                ${name}
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png " />
                <button onclick="SacarInfo('${url}')">Info</button>
            </li>
          `;

        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


 

  
  function SacarInfo(url) {
    
    axios
    .get(url)
    .then((result) => {
        const height = result.data.height;
        const weight = result.data.weight;
        const type = result.data.types;
        type.map((tipo) => {
            
            document.querySelector("#listado").innerHTML += `
             <p> Tipo: ${tipo.type.name} </p> 
             `;
            
        })


        
        
    })
}

