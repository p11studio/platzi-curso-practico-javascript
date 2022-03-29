// Codigo del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area cuadrada es: " + areaCuadrada + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados de mi triangulo miden: "
     + ladoTriangulo1 
     + "cm, " 
     + ladoTriangulo2 
     + "cm ," 
     + baseTriangulo 
     + "cm")

     const alturaTriangulo = 5.5;
     console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

     const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
     console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm^2");

     const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
     console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Codigo del Circulo
console.group("Circulo");

// Radio

const radioCirculo = 4;
console.log("El radio del circulo: " + radioCirculo + "cm");


// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo: " + diametroCirculo + "cm");
// PI

const PI = Math.PI;
console.log("El PI es: " + PI + "cm");

// Circuferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo: " + perimetroCirculo + "cm");

// Area

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El aread del circulo: " + areaCirculo + "cm^2");

console.groupEnd();