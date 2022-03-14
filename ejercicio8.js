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
]

registrarAlimento(alimentos,function(tipos){
    let suma = 0;
    tipos.forEach(function(tipo){
        suma = suma + tipo.energía;
    })

    console.log(tipos);
    console.log(`La suma de las energias es ${suma}`)
})