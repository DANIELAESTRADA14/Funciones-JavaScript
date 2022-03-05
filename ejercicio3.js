/*La luna de Endor pierde temperatura día a día, para ello hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la temperatura máxima y mínima de cada día */

/*function calcularTemperatura(max,min){
    let media = (max + min) / 2;
    return (`La temperatura media de hoy es: ${media}`)
}

console.log(calcularTemperatura(50,30));*/

let media = [37,30,32,26,23];

let calcularTemperatura = (...media) => {
    let maxima = Math.max(...media);
    let minimo = Math.min(...media);
    let promedia = (maxima+minimo) / 2;
    return (`El promedia de temperatura de hoy es: ${promedia}`)
}

console.log(calcularTemperatura(...media));