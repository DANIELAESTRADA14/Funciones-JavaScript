//Declarando función ppal

function filtrarPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,buscarPlanos){
    let planos = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];
    let planosFiltrados = planos.filter(function(plano){
        return (plano <= 10);
    })
    buscarPlanos(planosFiltrados)
}

//Llamando función ppal

filtrarPlanos(100,20,15,16,40,10,5,1,13,22,function(planos){
    if(planos.length > 0){
        console.log("Arranque la nave")
    } else {
        console.log("Planos incorrectos")
    }
})