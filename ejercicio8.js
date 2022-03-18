/* Grogu ha iniciado su entrenamiento Jedi y debe activar un software que permita clasificar su dieta: alimento = {
 nombre,
 tipo (Puede ser vegetal, animal, insecto),
 nivel de energía (números entre 100-500)

}
Cree un programa que permita recibir 50 alimentos diferentes y mediante una función primaria después de 5 segundos se pueda obtener solo los alimentos de tipo vegetal que entreguen mas de 200 unidades de energía. Finalmente, una función callback debe permitir entregar la sumatoria de niveles de energía entregados por los alimentos vegetales consumidos en la dieta de Grogu*/


let nombres = ["cucaracha", "lechuga", "jamón","gusano", "zanahoria", "pollo"]
let tipos = ["insecto","vegetal","animal"]
let niveles = [200,100,450,236,258,400]



let alimentos = []

for(let i=0;i<50;i++){

    let alimento = {}
    alimento.nombre = nombres[Math.floor(Math.random()*nombres.length)]
    alimento.tipo = tipos[Math.floor(Math.random()*tipos.length)]
    alimento.nivel = niveles[Math.floor(Math.random()*niveles.length)]

    alimentos.push(alimento)

}


function registrarAlimento(alimentos, callback){
    setTimeout(function(){
        let tipos = alimentos.filter(function(alimento){
            
                return (alimento.tipo == "vegetal" && alimento.nivel > 200);
            
            
        })

        callback(tipos);
    },5000)

}

registrarAlimento(alimentos,function(tipos){
    let suma = 0;
    tipos.forEach(function(tipo){
        suma = suma + tipo.nivel;
    })

    console.log(tipos);
    console.log(`La suma de las energias es ${suma}`)
})