/*Watto paga a su personal de ventas un salario de 3500000 mensuales, más una comisión de 1500000 por cada
nave vendida, menos el 5% de deducciones aplicada solo a las comisiones. Codifica un programa que calcule e imprima el
salario mensual de un vendedor dado;*/

function pagarSalario(numventas){
    let sb = 3500000;
    let comision = numventas * 1500000;
    let deduccion = comision - ((comision * 5)/ 100)
    let sn = sb + deduccion;
    return sn;
}

let MarcoPerez = console.log(`Marco Perez tiene un salario de ${pagarSalario(2)}`);
let JuanaDeArco = console.log(`Juana De Arco tiene un salario de ${pagarSalario(6)}`);;