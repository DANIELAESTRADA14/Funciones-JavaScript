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
    },

    {
        color: "negro",
        energia: 72,
        portador: "Juan"
    },

    {
        color: "beige",
        energia: 34,
        portador: "Ricardo"
    },

    {
        color: "dorado",
        energia: 13,
        portador: "Linda"
    },

    {
        color: "rosado",
        energia: 56,
        portador: "Carlos"
    },

    {
        color: "fucsia",
        energia: 4,
        portador: "Camila"
    },

    {
        color: "gris",
        energia: 19,
        portador: "Lorena"
    },

    {
        color: "negro",
        energia: 12,
        portador: "Santiago"
    },

    {
        color: "rojo",
        energia: 49,
        portador: "Hilda"
    },

    {
        color: "petroleo",
        energia: 36,
        portador: "Jonathan"
    },

    {
        color: "aguamarina",
        energia: 78,
        portador: "Daniela"
    },

    {
        color: "blanco",
        energia: 2,
        portador: "Leila"
    },

    {
        color: "plateado",
        energia: 14,
        portador: "Sara"
    },

    {
        color: "tierra",
        energia: 99,
        portador: "Susi"
    },
]



    let filtrar = sables.filter(function(sable){
        return (sable.energia<20)
    })

    console.log(filtrar);
    
    console.log(`Hay ${filtrar.length} sables con energia menor a 20 Jules`);
    





