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

  }