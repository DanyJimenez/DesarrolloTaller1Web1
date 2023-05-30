let opcion = -1;
let contadorOpcion1 = 0;
let contadorOpcion2 = 0;
let contadorOpcion3 = 0;
let contadorOpcion4 = 0;
let contadorOpcion5 = 0;
let contadorOpcion6 = 0;


while (opcion !== 0) {
  opcion = parseInt(prompt('Resolvamos algunos ejercicios: \n 1. Ordenar tres números ingresador por teclado de mayor a menor y viceversa \n 2. Calcular el área de una circunferencia \n 3. Conocer qué tipo de triángulo es ingresando por teclado cada uno de sus lados \n 4. Ingresar dos números por teclado y saber si un número es amigo del otro \n 5. Ingresar un valor de compra y una cantidad (la cantidad equivale al mismo producto) y mostrar por consola el valor de la compra \n 6. Ingresar 4 notas de un estudiante y saber si ganó o perdió la materia \n 0. Salir '));

  if (opcion === 1) {
    const numeroUno = parseInt(prompt("Ingrese el primer número:"));
    const numeroDos = parseInt(prompt("Ingrese el segundo número:"));
    const numeroTres = parseInt(prompt("Ingrese el tercer número:"));

    function ordenarMenorMayor(a, b, c) {
      let menor, medio, mayor;

      if (a <= b && a <= c) {
        menor = a;
        if (b <= c) {
          medio = b;
          mayor = c;
        } else {
          medio = c;
          mayor = b;
        }
      } else if (b <= a && b <= c) {
        menor = b;
        if (a <= c) {
          medio = a;
          mayor = c;
        } else {
          medio = c;
          mayor = a;
        }
      } else {
        menor = c;
        if (a <= b) {
          medio = a;
          mayor = b;
        } else {
          medio = b;
          mayor = a;
        }
      }

      return [menor, medio, mayor];
    }

    function ordenarMayorMenor(a, b, c) {
      const [menor, medio, mayor] = ordenarMenorMayor(a, b, c);
      return [mayor, medio, menor];
    }

    console.log("Orden de menor a mayor:", ordenarMenorMayor(numeroUno, numeroDos, numeroTres));
    console.log("Orden de mayor a menor:", ordenarMayorMenor(numeroUno, numeroDos, numeroTres));
    contadorOpcion1 ++; //contador 1

  }else if (opcion === 2) {
    const pi = Math.PI;
    let radio = parseFloat(prompt("Ingrese el radio de la circunferencia: "))
    function calcularAreaCircunferencia(radio) {
      return (pi * radio ** 2).toFixed(3)
    }
    console.log(`El área de una cicunferencia cuyo radio es ${radio} es: ${calcularAreaCircunferencia(radio)}`);
    contadorOpcion2++; //contador 2


  }else if (opcion === 3) {
    let ladoA = parseFloat(prompt('Ingrese el valor del lado a: '));
    let ladoB = parseFloat(prompt('Ingrese el valor del lado b: '));
    let ladoC = parseFloat(prompt('Ingrese el valor del lado c: '));

    if (ladoA === ladoB && ladoB === ladoC) {
      console.log(`Un triángulo cuyo lado a es ${ladoA}, lado b es ${ladoB} y lado c es ${ladoC} es equilatero.`)
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      console.log(`Un triángulo cuyo lado a es ${ladoA}, lado b es ${ladoB} y lado c es ${ladoC} es isósceles.`)
    } else {
      console.log(`Un triángulo cuyo lado a es ${ladoA}, lado b es ${ladoB} y lado c es ${ladoC} es escaleno.`)
    }
    contadorOpcion3 ++; //contador 3

  }else if (opcion === 4) {

    let x = parseInt(prompt('Digite el valor de x: '));
    let divisores_n1 = []
    for (let i = 1; i < x; i++) {
      if (x % i == 0) {
        divisores_n1.push(i)
      }

    }
    let suma_d1 = 0;
    for (let i of divisores_n1) {
      suma_d1 += i;
    }
    console.log(`Los divisores de ${x} son: ${divisores_n1} y su suma es: ${suma_d1} `)


    let y = parseInt(prompt('Digite el valor de y: '));
    let divisores_n2 = []
    for (let i = 1; i < y; i++) {
      if (y % i == 0) {
        divisores_n2.push(i)
      }

    }
    let suma_d2 = 0;
    for (let i of divisores_n2) {
      suma_d2 += i;
    }
    console.log(`Los divisores de ${y} son: ${divisores_n2} y su suma es: ${suma_d2} `)


    if (suma_d1 == y && suma_d2 == x) {
      console.log(`${x} y ${y} son números amigos`)
    } else {
      console.log(`${x} y ${y} no son números amigos`)
    }
    contadorOpcion4++;
    //220 - 284 ==> números amigos
  }