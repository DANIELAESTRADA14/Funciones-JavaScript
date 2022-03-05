/*Obi-Wan Kenobi, necesita clasificar diferentes códigos de acceso a las naves de guerra los cuáles reposan en la base de datos
central, para ello debe programar una función que permita recibir la palabra clave de cada nave y separar imprimiendo solo el nombre del
piloto asignado a cada nave. Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn
*/


let separar = codigo => {
    let nombre = codigo.split(":")
    return (`El piloto es ${nombre[1]}`)
}
 
console.log(separar("ARQ2555: Sara Bel-Sun"));
console.log(separar("ARW2556:Nodin Chavdri"));
console.log(separar("ARQ2557: Finn"));
