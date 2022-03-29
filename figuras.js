// Codigo del cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrada(lado) {
    return lado * lado;
} 
//console.log("El area cuadrada es: " + areaCuadrada + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

//console.log(
    // "Los lados de mi triangulo miden: "
    //  + ladoTriangulo1 
    //  + "cm, " 
    //  + ladoTriangulo2 
    //  + "cm ," 
    //  + baseTriangulo 
    //  + "cm");

     //const alturaTriangulo = 5.5;
     //console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

     function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
     }
     //console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm^2");

     function areaTriangulo(base, altura) {
         return (base * altura) / 2;
     }
     //console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();


// Codigo del Circulo
console.group("Circulo");

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo: " + radioCirculo + "cm");


// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
//console.log("El PI es: " + PI + "cm");

// Circuferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();