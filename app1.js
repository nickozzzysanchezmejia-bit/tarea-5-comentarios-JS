let personajes = {
    nombre: "Goku",
    anime: "Dragon Ball",
    edad: 40
};
console.log(personajes);
console.log(personajes.anime);
console.log(personajes.edad);
console.log(personajes.nombre);
console.log(personajes["anime"]);
personajes.edad = 16;
console.log(personajes.edad);
console.log(personajes["edad"]);
personajes.nombre = "Vegeta";
console.log(personajes["nombre"]);
console.log(personajes.nombre);
let propiedad1 = "Equipo";
personajes[propiedad1] = "Real Madrid";
console.log(personajes);
delete personajes.edad;
console.log(personajes);


