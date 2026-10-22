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


//arrays
let animales = ["chancho" , "loro" , "perro" , "gato"];
console.log(animales);
console.log(animales.length);
 //acceder a un elemnto de un arrays

console.log(animales[0]);
console.log(animales[1]);
console.log(animales[2]);
console.log(animales[3]);

//agregar un elemento
animales[4] = "conejo";
console.log(animales);
animales[10] = "perro";
console.log(animales);
console.log(animales[7]);
console.log(typeof animales);



