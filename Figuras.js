//Aquí interactuamos con html
function perimetroCuadrado(lado){
    return lado*4;
}
function areaCuadrado(lado){
    return lado*lado;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //solo el valor

    const perimetro = perimetroCuadrado(value);
    alert(perimetro); //para que la persona no abra el console
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //solo el valor

    const area = areaCuadrado(value);
    alert(area); //para que la persona no abra el console
}
