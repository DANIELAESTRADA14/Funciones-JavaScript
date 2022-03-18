/*Yoda el maestro jedí, necesita asignar a sus aprendices
Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años

Inicialmente, se debe programar una función que asocie los datos de: {nombre, planeta, edad y estatura} de 1 Padawan a un objeto (10 segundos) y una vez este objeto sea creado se debe llamar a una función secundaria que clasifique y muestre en consola la actividad asignada al Padawan*/


function crearObjeto(nombre,planeta,edad,estatura,callback){
    setTimeout(function(){
        let aprendiz = {
            nombre,
            planeta,
            edad,
            estatura
        }

        callback(aprendiz);
    },10000)
}

crearObjeto("Cin","Tatooine",15,1.64,function(aprendiz){
    if (aprendiz.edad < 15) {
        console.log(`El aprendiz ${aprendiz.nombre} tiene como actividad: Manejo de fuerza`);
    } else {
        console.log(`El aprendiz ${aprendiz.nombre} tiene como actividad: Manejo del sable de luz`);
    }
})

