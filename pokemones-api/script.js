function CargarPokemones() {
  document.querySelector("#img").innerHTML = "";
  document.querySelector("#listado").innerHTML = "";
  document.querySelector("#info").innerHTML = "";
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=40")
      .then((result) => {
        const pokemones = result.data.results;
        pokemones.map((pokemon) => {
          const { name, url } = pokemon;
          const myArray = url.split("/");       
          let id = myArray[myArray.length - 2]          
          document.querySelector("#listado").innerHTML += `
            
          <div class="col-3">
            <div class="card mb-4">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h4 class="card-title"> ${name}</h4> 
                <button onclick="SacarInfo('${url}')">Info</button>              
              </div>
            </div>
          </div>
            
          `;

        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


 

  
  function SacarInfo(url) {
    document.querySelector("#img").innerHTML = "";
    document.querySelector("#listado").innerHTML = "";
    document.querySelector("#info").innerHTML = "";
    console.log(url);
    axios
    .get(url)
    .then((result) => {
        const height = result.data.height;
        const weight = result.data.weight;
        const img = result.data.sprites.front_default;
        const types = result.data.types;
        const Nombre = result.data.name;
       
            document.querySelector("#info").innerHTML += `
     
            <div class="card col-3">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nombre: ${Nombre} </h5>
              <h5 class="card-text">Altura: ${height} </h5>
              <h5 class="card-text">Ancho: ${weight} </h5>
              <h5 class="card-text"> <div id="p">Tipo: </div> </h5>
              
             
              <a href="#" onclick="CargarPokemones()" class="btn btn-primary">Regresar</a>
            </div>
          </div>
            
             `;

             types.map((tipo) => {

              console.log(tipo.type.name);
              document.querySelector("#p").innerHTML += `${tipo.type.name}`;
              document.querySelector("#p").innerHTML += ` `;
                      });
            

        
    })
}

