/*QUI-GON JINN está encargado de revisar un arreglo de 20 sables de luz y contabilizar la cantidad de sables que
tienen energias menores a 20 Joules
Nota: el formato de cada sable es:
sable={
color: verde,
 energia: 50 ,
 portafor: Obi Wan
}*/


let color = ["rojo","verde","azul","amarillo","negro"]
let energia = [50,10,45,23,12,7]
let portador = ["ObiWan", "Bel-Sun","Finn","Nodin"]

let sables = []

for(let i=0;i<20;i++){

    let sable = {}
    sable.color = color[Math.floor(Math.random()*color.length)]
    sable.energia = energia[Math.floor(Math.random()*energia.length)]
    sable.portador = portador[Math.floor(Math.random()*portador.length)]

    sables.push(sable)
}

function consultarSables(objetos){ 
let filtrar = objetos.filter(function(objeto){
    return (objeto.energia<20)
})

console.log(filtrar);

console.log(`Hay ${filtrar.length} sables con energia menor a 20 Jules`);
}

consultarSables(sables)
    





