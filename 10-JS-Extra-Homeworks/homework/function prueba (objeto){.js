function prueba (objeto){
    return Object.entries(objeto)
}

objeto = ({
      D: 1,
      B: 2,
      C: 3
    })



    function capicua (num){
        let cadena = num.toString();
        for(var i=0; j=cadena.length-1; i++; --j){
            if(cadena[i]!=cadena[j]){
                return 'No es Capicua';
            } 
        }return 'Es Capicua';
    }