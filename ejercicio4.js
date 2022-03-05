/*QUI-GON JINN está encargado de revisar un arreglo de 20 sables de luz y contabilizar la cantidad de sables que
tienen energias menores a 20 Joules
Nota: el formato de cada sable es:
sable={
color: verde,
 energia: 50 ,
 portafor: Obi Wan
}*/


let sables = [
    {
        color: "verde",
        energia: 50 ,
        portador: "ObiWan"
    },

    {
        color: "azul",
        energia: 10 ,
        portador: "Bel-Sun"
    },

    {
        color: "rojo",
        energia: 14,
        portador: "Nodin"
    },

    {
        color: "cafe",
        energia: 12,
        portador: "Finn"
    },
    {
        color:"amarillo",
        energia: 23,
        portador: "Ana"
    },

    {
        color: "negro",
        energia: 72,
        portador: "Juan"
    },

    {
        color: "blanco",
        energia: 3,
        portador: "Maria"
    }
]



    let filtrar = sables.filter(function(sable){
        return (sable.energia<20)
    })

    console.log(filtrar);
    console.log(`Hay ${filtrar.length} sables con energia menor a 20 Jules`);
    





