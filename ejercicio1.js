/*Yoda el maestro jedi, necesita enseñar a sus aprendices Padawan a calcular la distancia a la que cualquiera de los planetas de la ruta N-14 pertenecientes a la ruta comercial de la federación intergaláctica, se encuentra del planeta NABOO. Para calcular dicha distancia se debe:
Recibir las coordenadas X,Y del planeta en UA */

let calcularDistancia = (x1,y1,x2,y2) => Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
 
 
let tatooine= calcularDistancia(0,0, -10,-10).toFixed(2);
console.log(`La distancia de Tatooine es ${tatooine}`);

let hoth= calcularDistancia(0,0, 70,50).toFixed(2);
console.log(`La distancia de Hoth es ${hoth}`);

let yavin4= calcularDistancia(0,0, 0,40).toFixed(2);
console.log(`La distancia de Yavin4 es ${yavin4}`);

let endor= calcularDistancia(0,0, 50, 0).toFixed(2);
console.log(`La distancia de Endor es ${endor}`);