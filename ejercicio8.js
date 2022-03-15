/* Grogu ha iniciado su entrenamiento Jedi y debe activar un software que permita clasificar su dieta: alimento = {
 nombre,
 tipo (Puede ser vegetal, animal, insecto),
 nivel de energía (números entre 100-500)

}
Cree un programa que permita recibir 50 alimentos diferentes y mediante una función primaria después de 5 segundos se pueda obtener solo los alimentos de tipo vegetal que entreguen mas de 200 unidades de energía. Finalmente, una función callback debe permitir entregar la sumatoria de niveles de energía entregados por los alimentos vegetales consumidos en la dieta de Grogu*/


function registrarAlimento(alimentos, callback){
    setTimeout(function(){
        let tipos = alimentos.filter(function(alimento){
            
                return (alimento.tipo == "vegetal" && alimento.energía > 200);
            
            
        })

        callback(tipos);
    },5000)

}

let alimentos = [
    {
        nombre: "Huevos",
        tipo: "animal",
        energía: 200
    },

    {
        nombre: "Carne",
        tipo: "animal",
        energía: 500
    },

    {
        nombre: "Zanahoria",
        tipo: "vegetal",
        energía: 230
    },

    {
        nombre: "Mariposa",
        tipo: "insecto",
        energía: 100
    },

    {
        nombre: "Res",
        tipo: "animal",
        energía: 400
    },
    {
        nombre: "Cerdo",
        tipo: "animal",
        energía: 340
    },

    {
        nombre: "Tomate",
        tipo: "vegetal",
        energía: 260
    },

    {
        nombre: "Hormiga",
        tipo: "insecto",
        energía: 200
    },

    {
        nombre: "Salchichon",
        tipo: "animal",
        energía: 260
    },

    {
        nombre: "Pepino",
        tipo: "vegetal",
        energía: 310
    },

    {
        nombre: "Gusano",
        tipo: "insecto",
        energía: 420
    },

    {
        nombre: "Chorizo",
        tipo: "animal",
        energía: 500
    },
    {
        nombre: "Remolacha",
        tipo: "vegetal",
        energía: 450
    },

    {
        nombre: "Zancudo",
        tipo: "insecto",
        energía: 210
    },

    {
        nombre: "Pollo",
        tipo: "animal",
        energía: 210
    },

    {
        nombre: "Cebolla",
        tipo: "vegetal",
        energía: 234
    },

    {
        nombre: "Hormiga",
        tipo: "insecto",
        energía: 245
    },

    {
        nombre: "Jamon",
        tipo: "animal",
        energía: 400
    },

    {
        nombre: "Repollo",
        tipo: "vegetal",
        energía: 234
    },

    {
        nombre: "Pulga",
        tipo: "insecto",
        energía: 340
    },

    {
        nombre: "Pescado",
        tipo: "animal",
        energía:124
    },
    {
        nombre: "Lechuga",
        tipo: "vegetal",
        energía: 150
    },

    {
        nombre: "Abeja",
        tipo: "insecto",
        energía: 100
    },

    {
        nombre: "Cabra",
        tipo: "animal",
        energía: 358
    },
    {
        nombre: "Brocoli",
        tipo: "vegetal",
        energía: 467
    },

    {
        nombre: "Oruga",
        tipo: "insecto",
        energía: 478
    },

    {
        nombre: "Cuy",
        tipo: "animal",
        energía: 432
    },

    {
        nombre: "Lentejas",
        tipo: "vegetal",
        energía: 300
    },

    {
        nombre: "Araña",
        tipo: "insecto",
        energía: 127
    },

    {
        nombre: "Caballo",
        tipo: "animal",
        energía: 398
    },

    {
        nombre: "Mosca",
        tipo: "insecto",
        energía: 345
    },

    {
        nombre: "Conejo",
        tipo: "animal",
        energía: 262
    },

    {
        nombre: "Naranja",
        tipo: "vegetal",
        energía: 120
    },

    {
        nombre: "Avispa",
        tipo: "insecto",
        energía: 147
    },

    {
        nombre: "Atun",
        tipo: "animal",
        energía: 236
    },

    {
        nombre: "Cucaracha",
        tipo: "insecto",
        energía: 285
    },

    {
        nombre: "Leche",
        tipo: "animal",
        energía: 422
    },

    {
        nombre: "Mazorca",
        tipo: "vegetal",
        energía: 340
    },

    {
        nombre: "Grillo",
        tipo: "insecto",
        energía: 347
    },

    {
        nombre: "Tocineta",
        tipo: "animal",
        energía: 500
    },

    {
        nombre: "Termita",
        tipo: "insecto",
        energía: 358
    },

    {
        nombre: "Salmon",
        tipo: "animal",
        energía: 352
    },

    {
        nombre: "Garbanzo",
        tipo: "vegetal",
        energía: 304
    },

    {
        nombre: "Libelula",
        tipo: "insecto",
        energía: 355
    },

    {
        nombre: "Gallina",
        tipo: "animal",
        energía: 238
    },

    {
        nombre: "Saltamontes",
        tipo: "insecto",
        energía: 466
    },

    {
        nombre: "Pavo",
        tipo: "animal",
        energía: 342
    },

    {
        nombre: "Calabaza",
        tipo: "vegetal",
        energía: 135
    },

    {
        nombre: "Rábano",
        tipo: "vegetal",
        energía: 344
    },

    {
        nombre: "Molusco",
        tipo: "animal",
        energía: 398
    },

]

registrarAlimento(alimentos,function(tipos){
    let suma = 0;
    tipos.forEach(function(tipo){
        suma = suma + tipo.energía;
    })

    console.log(tipos);
    console.log(`La suma de las energias es ${suma}`)
})