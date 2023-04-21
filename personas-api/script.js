function cargarDatos(){
    axios
    .get("https://randomuser.me/api/")
    .then((result) => {
        const {cell, id, name, email} = result.data.results[0];
        var img = (result.data.results[0].picture.large);
       console.log(result.data.results[0]);
       document.querySelector("#contenedor").innerHTML = ` <center> ${name.first} ${name.last} <br> <img src="${img}"> <center>`
       
    })
    .catch((error) => {
        console.log(error);
    })
}