function cargarDatos(){
    axios
    .get("https://randomuser.me/api/")
    .then((result) => {
        const {cell, id, name, email} = result.data.results[0];
       console.log(result.data.results[0]);
       document.querySelector("#contenedor").innerHTML = `${name.first} ${name.last} ${email.username} `
       
    })
    .catch((error) => {
        console.log(error);
    })
}