//  Ejercicio 1: Operación matemática

function realizarOperacion(operacion) {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    let resultado = '';

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado = 'Por favor, ingresa valores válidos.';
    } else {
        switch (operacion) {
            case '+':
                resultado = `Resultado: ${valor1 + valor2}`;
                break;
            case '-':
                resultado = `Resultado: ${valor1 - valor2}`;
                break;
            case '*':
                resultado = `Resultado: ${valor1 * valor2}`;
                break;
            case '/':
                resultado = valor2 !== 0 ? `Resultado: ${valor1 / valor2}` : 'No se puede dividir entre cero';
                break;
            default:
                resultado = 'Operación no válida';
        }
    }
    document.getElementById('resultado').innerText = resultado;
}

// Ejercicio 2: Mayor de 2

document.getElementById('numForm')
.addEventListener('submit', function(event) {

    event.preventDefault();

let num1 = parseFloat(document.getElementById('num1').value);
let num2 = parseFloat(document.getElementById('num2').value);

let resultText;

if (num1 > num2) {
    resultText = `${num1} es mayor que ${num2}`;
} else if (num1 < num2) {
    resultText = `${num1} es menor que ${num2}`;
} else if(num1 == num2){
    resultText = 'Ambos números son iguales';
} else if(isNaN(num1) || isNaN(num2)){
    resultText = 'Por favor, ingresa valores válidos.';
}
document.getElementById('result').innerText = resultText;
});

// Ejercicio 3: Mayor de 100

document.getElementById('nusForm')
.addEventListener('submit', function(event) {
event.preventDefault();

let num3 = parseFloat(document.getElementById('num3').value);

let resultText;

if (num3 > 100) {

    resultText = `${num3} es mayor que 100`;
} else if (num3 < 100) {

    resultText = `${num3} es menor que 100`;
} else if(num3 == 100){

    resultText = `${num3} es igual a 100`;
} else if(isNaN(num3)){
   
    resultText = 'Por favor, ingresa valores v lidos.';
}
document.getElementById('resulta').innerText = resultText;
}
);

// Ejercicio 4: Valores ascendentes

document.getElementById('con4')
    .addEventListener('submit', function(event) {

        event.preventDefault();

        const [a, b, c] = ['a', 'b', 'c'].map(id => parseFloat(document.getElementById(id).value));

        let resultado;

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            resultado = 'Por favor, ingresa valores válidos.';
        } else {

            const valores = [a, b, c].sort((x, y) => x - y);
            resultado = `El orden de menor a mayor es: ${valores.join(', ')}`;
        }
    document.getElementById('resultado4').innerText = resultado;
});

// Ejercicio 5: Promedio de notas

    document.getElementById('formNotas').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);


    const promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);

    let mensaje; 
    if (promedio > 3.5) {
        mensaje = `Aprobó con un promedio de ${promedio} ¡Felicidades!`;
    } else {
        mensaje = `Reprobó con un promedio de ${promedio} Sigue intentándolo.`;
    }

    document.getElementById('resultado5').innerHTML = mensaje;
});

// Ejercicio 6: Calcular el area

document.getElementById('formArea').addEventListener('submit', function(event) {
    event.preventDefault();

    const b = parseFloat(document.getElementById('base').value);
    const h = parseFloat(document.getElementById('altura').value);

    const area = b * h;

    document.getElementById('resultado6').innerHTML = `El area es: ${area}`;
});

// Ejercicio 7: Par o impar

document.getElementById('formParImpar').addEventListener('submit', function(event) {
    event.preventDefault();

    const num = parseFloat(document.getElementById('num').value);
    const esPar = num % 2 == 0;

    document.getElementById('resultado7').innerHTML = `El numero ${num} es ${esPar ? 'Par' : 'Impar'}`;
});

// Ejercicio 8: Descuento

document.getElementById('formCajaNegra').addEventListener('submit', function(event) {
    event.preventDefault();

    // obtener el valor del input de color, eliminar espacios en blanco y convertir a minusculas
    const color = document.getElementById('color').value.trim().toLowerCase();
    const cantidad = parseFloat(document.getElementById('docena').value);
    const precios = { rojo: 4000, blanco: 5000, negro: 18000, otro: 6000 };
    const descuentos = { rojo: 0.1, blanco: 0.08, negro: 0, otro: 0.02 };

    const valordocena = precios[color] || precios.otro;
    const descuento = descuentos[color] || descuentos.otro;

    const total = valordocena * cantidad;
    const valordescuento = total * descuento;
    const totalFinal = total - valordescuento;

    document.getElementById('resultado8').innerHTML = `El total a pagar es: ${totalFinal.toFixed(0)}`;
});

// Ejercicio 9: Ganado x empleado

document.getElementById('formGanado').addEventListener('submit', function(event) {
    event.preventDefault();

    const productos = parseInt(document.getElementById('productos').value);
    const ventas = parseFloat(document.getElementById('ventas').value);

    const porcentajes = [
        { desde: 0, hasta: 20, porcentaje: 0.05 },
        { desde: 21, hasta: 50, porcentaje: 0.1 },
        { desde: 51, hasta: 80, porcentaje: 0.15 },
        { desde: 81, hasta: 100, porcentaje: 0.2 },
    ];

    const porcentaje = porcentajes.find(rango => productos >= rango.desde && productos <= rango.hasta)?.porcentaje || 0;

    const ganancia = ventas * porcentaje;

    document.getElementById('resultado9').innerHTML = `El empleado gano : ${ganancia.toFixed(0)}`;
});

// Ejercicio 10: Consecionario 

function calculateDiscount() {
    var color = document.getElementById("color").value.toLowerCase();
    var model = parseInt(document.getElementById("model").value);
    var price = parseFloat(document.getElementById("price").value);
    var brand = document.getElementById("brand").value;

    var discount = 0;

    if (color === 'verde') {
        discount = 0.15;
    }
    if (model < 1990) {
        discount = 0.20;
    }
    if (color === 'rojo' && model > 1995) {
        discount = 0.10;
    }

    var discountAmount = price * discount;
    var totalPrice = price - discountAmount;

    document.getElementById("resultado10").innerHTML =
        "Marca: " + brand + "<br>" +
        "Precio original: $" + price.toFixed(2) + "<br>" +
        "Descuento: $" + discountAmount.toFixed(2) + "<br>" +
        "Total a pagar: $" + totalPrice.toFixed(2);
}

// Ejercicio 11: Decremento de 3 en 3

var sequence = "";
for (var i = 200; i >= 0; i -= 3) {
            sequence += i + " ";
}
document.getElementById("sequence").textContent = sequence;

// Ejercicio 12: Serie de Fibonacci

function ejercicio3_12() {
    const num = parseInt(document.getElementById('num3_12').value);
    if (num < 10) return alert("Debe ser ≥ 10");
    
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    const suma = fib.reduce((a, b) => a + b, 0);
    document.getElementById('result3_12').innerHTML = `
        Serie: ${fib.join(', ')}<br>
        Suma: ${suma}<br>
        Cantidad: ${num}`;
}

// Ejercicio 13: Números primos

    function esPrimo(n) {
        for (let i = 2; i <= Math.sqrt(n); i++)
            if (n % i === 0) return false;
        return n > 1;
    }

    (function ejercicio3_13() {
        let primos = [];
        let num = 2;
        while(primos.length < 30) {
            if(esPrimo(num)) primos.push(num);
            num++;
        }
        document.getElementById('result3_13').innerHTML = primos.join(', ');
    })();

    // Ejercicio 14: Análisis numérico

    function ejercicio3_14() {
        const num = parseInt(document.getElementById('num3_14').value);
        if (num <= 10) return alert("Debe ser > 10");
        
        let pares = [], impares = [];
        for (let i = 1; i <= num; i++) {
            i % 2 === 0 ? pares.push(i) : impares.push(i);
        }
        
        const sumPares = pares.reduce((a, b) => a + b, 0);
        const sumImpares = impares.reduce((a, b) => a + b, 0);
        
        document.getElementById('result3_14').innerHTML = `
            Pares: ${pares.join(', ')}<br>
            Impares: ${impares.join(', ')}<br>
            Suma pares: ${sumPares}<br>
            Suma impares: ${sumImpares}<br>
            Resta (pares - impares): ${sumPares - sumImpares}<br>
            Promedio pares: ${sumPares / pares.length}<br>
            Promedio impares: ${sumImpares / impares.length}`;
    }

    // Ejercicio 15: Menu

    function ejercicio3_15() {
        const op = document.getElementById('opcion').value;
        const j = parseFloat(document.getElementById('num1').value);
        const k = parseFloat(document.getElementById('num2').value);
        // El tercer número no se usa según las operaciones descritas
        
        let resultado;
        switch(op) {
            case '1': resultado = j + k; break;
            case '2': resultado = j % k; break;
            case '3': resultado = k !== 0 ? j / k : "Error"; break;
            case '4': resultado = j + k + 1; break;
            case '5': resultado = j * k; break;
        }
        
        document.getElementById('result3_15').innerHTML = `Resultado: ${resultado}`;
    }

    // Ejercicio 16: Divisibilidad

    function ejercicio3_16() {
        const num = parseInt(document.getElementById('num3_16').value);
        const resultado = num > 3 && num % 6 === 0;
        document.getElementById('result3_16').innerHTML = 
            `${num} ${resultado ? 'SÍ' : 'NO'} es divisible por 2 y 3`;
    }

    // Ejercicio 17: Primos en rango

    function ejercicio3_17() {
        let a = parseInt(document.getElementById('numA').value);
        let b = parseInt(document.getElementById('numB').value);
        if (a < b) [a, b] = [b, a]; // Asegurar que a > b
        if (b < 4) return alert("Valores deben ser ≥ 4");
        
        let primos = [];
        for (let i = b; i <= a; i++) {
            if(esPrimo(i)) primos.push(i);
        }
        
        document.getElementById('result3_17').innerHTML = primos.join(', ');
    }

    // Ejercicio 18: Reloj

    (function ejercicio3_18() {
        let horas = [];
        let minutos = [];
        let segundos = [];

        for (let h = 0; h < 24; h++) {
            horas.push(`${h.toString().padStart(2, '0')}:00:00`);
            for (let m = 0; m < 60; m++) {
                minutos.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:00`);
                for (let s = 0; s < 60; s++) {
                    segundos.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
                }
            }
        }
        document.getElementById('result3_18').innerHTML = horas.concat(minutos, segundos).join('<br>');
    })();

    // Ejercicio 19: Tabla de multiplicar

    function generarTabla() {
        const numero = parseInt(document.getElementById('num3_19').value);
        let resultado = `<h4>Tabla del ${numero}</h4>`;
        
        for(let i = 1; i <= 10; i++) {
            resultado += `${i} * ${numero} = ${i * numero}<br>`;
        }
        
        document.getElementById('result3_19').innerHTML = resultado;
    }

    // Ejercicio 20: Analizador de números

    function esPrimo(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        
        for(let i = 5; i * i <= n; i += 6) {
            if(n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }
    
    function analizarNumeros() {
        const input = document.getElementById('numeros3_20').value;
        const numeros = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n) && n > 3);
        
        if(numeros.length !== 50) {
            alert("Debe ingresar exactamente 50 números válidos mayores que 3");
            return;
        }
        
        let pares = 0, impares = 0, primos = 0, noPrimos = 0;
        let listaPrimos = [];
        
        numeros.forEach(num => {
            if(num % 2 === 0) pares++;
            else impares++;
            
            if(esPrimo(num)) {
                primos++;
                listaPrimos.push(num);
            } else {
                noPrimos++;
            }
        });
        
        const resultado = `
            <p>Pares: ${pares}</p>
            <p>Impares: ${impares}</p>
            <p>Primos: ${primos}</p>
            <p>No primos: ${noPrimos}</p>
            <h4>Números primos encontrados:</h4>
            <p>${listaPrimos.join(', ')}</p>
        `;
        
        document.getElementById('result3_20').innerHTML = resultado;
    }

    // Ejercicio 21: Suma

    function ejercicio3_21() {

        const num11 = parseInt(document.getElementById('num11').value);
        const num21 = parseInt(document.getElementById('num21').value);
        const num31 = parseInt(document.getElementById('num31').value);
        
        const sum = num11 + num21 + num31;
     
        document.getElementById('result3_21').innerHTML = `El resultado de la uma: ${sum}`;
    }

    // Ejercicio 22: Notas

    function calcularPromedio() {

        let calificacion1 = parseFloat(document.getElementById("calificacion1").value);
        let calificacion2 = parseFloat(document.getElementById("calificacion2").value);
        let calificacion3 = parseFloat(document.getElementById("calificacion3").value);
        let calificacion4 = parseFloat(document.getElementById("calificacion4").value);
    
        if (isNaN(calificacion1) || isNaN(calificacion2) || isNaN(calificacion3) || isNaN(calificacion4) ||
            calificacion1 < 0 || calificacion1 > 10 ||
            calificacion2 < 0 || calificacion2 > 10 ||
            calificacion3 < 0 || calificacion3 > 10 ||
            calificacion4 < 0 || calificacion4 > 10) {
          alert("Por favor, ingrese calificaciones válidas (entre 0 y 10).");
          return;
        }

        let promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
    
        document.getElementById("respuesta22").textContent =
          `El promedio de las calificaciones es: ${promedio.toFixed(1)}`;
      }

    // Ejercicio 23: Calcular área

    document.getElementById('calcularPromedio').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const c = parseFloat(document.getElementById('base2').value);
        const q = parseFloat(document.getElementById('altura2').value);
    
        const area = c * q;
    
        document.getElementById('resultado23').innerHTML = `El area es: ${area}`;
    });

    // Ejercicio 24: Calcular circunferencia

    function calcularrea() {

    let radio = parseFloat(document.getElementById('radio').value);
    
     if (isNaN(radio) || radio <= 0) {
        alert("Por favor, ingrese un valor válido y positivo para el radio.");
        return;
    }
    
    const PI = 3.1416; 
    let area = PI * Math.pow(radio, 2);
    
    document.getElementById('resultado24').innerHTML =
        `El área de la circunferencia es: ${area.toFixed(2)}`;
    }

    // Ejercicio 25: Calcular terreno

    function calcularterreno() {
        let baseRectangulo = parseFloat(document.getElementById("baseRectangulo").value);
        let alturaRectangulo = parseFloat(document.getElementById("alturaRectangulo").value);
        let baseTriangulo = parseFloat(document.getElementById("baseTriangulo").value);
        let alturaTriangulo = parseFloat(document.getElementById("alturaTriangulo").value);
    
        if (isNaN(baseRectangulo) || isNaN(alturaRectangulo) || isNaN(baseTriangulo) || isNaN(alturaTriangulo) ||
            baseRectangulo <= 0 || alturaRectangulo <= 0 || baseTriangulo <= 0 || alturaTriangulo <= 0) {
          alert("Por favor, ingrese valores válidos y positivos para todas las medidas.");
          return;
        }

        let areaRectangulo = baseRectangulo * alturaRectangulo;
    
        let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    
        let areaTotal = areaRectangulo + areaTriangulo;
    
        document.getElementById('resultado25').innerHTML =
          `Área del rectángulo: ${areaRectangulo.toFixed(0)}<br>` +
          `Área del triángulo: ${areaTriangulo.toFixed(0)}<br>` +
          `Área total del terreno: ${areaTotal.toFixed(0)}`;
      }

    // Ejercicio 26: Calcular areafigura

    function ejercicio26() {

        let H = parseFloat(document.getElementById("H").value);
        let R = parseFloat(document.getElementById("R").value);
    
        let catetoDesconocido = Math.sqrt(Math.pow(H, 2) - Math.pow(R, 2));
    
        let aareaTriangulo = (R * catetoDesconocido) / 2;
    
        const PI = 3.1416; 
        let areaSemicircunferencia = (PI * Math.pow(R, 2)) / 2;
    
        let aareaTotal = (2 * aareaTriangulo) + areaSemicircunferencia;
    
        document.getElementById('resultado26').innerHTML =
          `Área de un triángulo: ${aareaTriangulo.toFixed(2)}<br>` +
          `Área de la semicircunferencia: ${areaSemicircunferencia.toFixed(2)}<br>` +
          `Área total de la figura: ${aareaTotal.toFixed(2)}`;
      }

    // Ejercicio 27: Calcular Leche

    function calcularPago() {
        let litros = parseFloat(document.getElementById("litros").value);
        let precioGalon = parseFloat(document.getElementById("precioGalon").value);

        if (isNaN(litros) || isNaN(precioGalon)) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }
    
        let galones = litros / 3.785;
    
        let pago = galones * precioGalon;
    
        document.getElementById("resultado27").textContent =
            `Por ${litros} litros, usted recibirá $${pago.toFixed(2)} por ${galones.toFixed(2)} galones.`;
    }
    
    // Ejercicio 28: Distancia

    function calcularDistancia() {
        let x1 = parseFloat(document.getElementById("x1").value);
        let y1 = parseFloat(document.getElementById("y1").value);
        let x2 = parseFloat(document.getElementById("x2").value);
        let y2 = parseFloat(document.getElementById("y2").value);
    
        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }
    
        let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    
        document.getElementById("resultado28").textContent =
            `La distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es: ${distancia.toFixed(2)}`;
    }

    // Ejercicio 29: Conversor de Metros a Pulgadas

    function calcularPulgadas() {
        let metros = parseFloat(document.getElementById("metros").value);
    
        if (isNaN(metros)) {
            alert("Por favor, ingrese una cantidad válida.");
            return;
        }
    
        let pulgadas = metros / 0.0254;
    
        document.getElementById("resultado29").textContent =
            `La cantidad de pulgadas requeridas es: ${pulgadas.toFixed(2)}`;
    }

    // Ejercicio 30: Conagua

    function calcularConagua() {
        let largo = parseFloat(document.getElementById("largo").value);
        let ancho = parseFloat(document.getElementById("ancho").value);
        let profundidad = parseFloat(document.getElementById("profundidad").value);
        let precioMetroCubico = parseFloat(document.getElementById("precioMetroCubico").value);
    
        if (isNaN(largo) || isNaN(ancho) || isNaN(profundidad) || isNaN(precioMetroCubico)) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }
    
        let volumen = largo * ancho * profundidad;
    
        let pagoTotal = volumen * precioMetroCubico;
    
        document.getElementById("resultado30").textContent =
            `El pago por ${volumen.toFixed(2)} metros cúbicos de agua es: $${pagoTotal.toFixed(2)}`;
    }

    // Ejercicio 31: Mayor que

    function determinarMayor() {
        let valor11 = parseFloat(document.getElementById("valor11").value);
        let valor22 = parseFloat(document.getElementById("valor22").value);
    
        let mayor;

        if (valor11 > valor22) {
            mayor = valor11;
        } else if (valor22 > valor11) {
            mayor = valor22;
        } else {
            mayor = "Los valores son iguales";
        }
    
        document.getElementById("resultado31").textContent =
            `El mayor valor es: ${mayor}`;
    }

    // Ejercicio 32: Determinar Signo

    function determinarSigno() {
        let numero = parseFloat(document.getElementById("numero").value);
    
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            return;
        }
    
        let resultado;
        if (numero > 0) {
            resultado = "El número es positivo.";
        } else if (numero < 0) {
            resultado = "El número es negativo.";
        } else {
            resultado = "El número es cero (neutro).";
        }
    
        document.getElementById("resultado32").textContent = resultado;
    }
    
    // Ejercicio 33: Lapices

    function calcularLapices() {
        let cantidad = parseInt(document.getElementById("cantidad").value);
    
        if (isNaN(cantidad) || cantidad < 0) {
            alert("Por favor, ingrese una cantidad válida.");
            return;
        }
    
        let costoPorLapiz;
        if (cantidad >= 1000) {
            costoPorLapiz = 0.85; 
        } else {
            costoPorLapiz = 0.90; 
        }
    
        let pagoTotal = cantidad * costoPorLapiz;
    
        document.getElementById("resultado33").textContent =
            `El pago por ${cantidad} lápices es: $${pagoTotal.toFixed(2)}`;
    }

    // Ejercicio 34: Harapiento

    function calcularPrecioFinal() {
        let precio = parseFloat(document.getElementById("precio").value);
    
        if (isNaN(precio) || precio < 0) {
            alert("Por favor, ingrese un precio válido.");
            return;
        }
    
        let descuento;
        if (precio > 2500) {
            descuento = precio * 0.15; 
        } else {
            descuento = precio * 0.08; 
        }
    
        let precioFinal = precio - descuento;
    
        document.getElementById("resultado34").innerHTML =
            `Precio original: $${precio.toFixed(2)}<br>` +
            `Descuento aplicado: $${descuento.toFixed(2)}<br>` +
            `Precio final: $${precioFinal.toFixed(2)}`;
    }

    // Ejercicio 35: Calcular Precio

    function determinarMayora() {
        let cantidad1 = parseFloat(document.getElementById("cantidad1").value);
        let cantidad2 = parseFloat(document.getElementById("cantidad2").value);
        let cantidad3 = parseFloat(document.getElementById("cantidad3").value);
    
        if (isNaN(cantidad1) || isNaN(cantidad2) || isNaN(cantidad3)) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }
    
        let mayor;
        if (cantidad1 > cantidad2 && cantidad1 > cantidad3) {
            mayor = cantidad1;
        } else if (cantidad2 > cantidad1 && cantidad2 > cantidad3) {
            mayor = cantidad2;
        } else if (cantidad3 > cantidad1 && cantidad3 > cantidad2) {
            mayor = cantidad3;
        } else {
            mayor = "Las cantidades son iguales o hay valores repetidos.";
        }
    
        document.getElementById("resultado35").textContent =
            `La mayor cantidad es: ${mayor}`;
    }

    // Ejercicio 36: Langosta

    function calcularLangosta() {
        let personas = parseInt(document.getElementById("personas").value);
    
        if (isNaN(personas) || personas <= 0) {
            alert("Por favor, ingrese un número válido de personas.");
            return;
        }
    
        let costoPorPlatillo;
        if (personas > 300) {
            costoPorPlatillo = 75.00; 
        } else if (personas > 200) {
            costoPorPlatillo = 85.00; 
        } else {
            costoPorPlatillo = 95.00; 
        }
    
        let presupuestoTotal = personas * costoPorPlatillo;
    
        document.getElementById("resultado36").innerHTML =
            `Número de personas: ${personas}<br>` +
            `Costo por platillo: $${costoPorPlatillo.toFixed(2)}<br>` +
            `Presupuesto total: $${presupuestoTotal.toFixed(2)}`;
    }

    // Ejercicio 37: Vinicultura

    function calcularVinicultura() {
        let precioInicial = parseFloat(document.getElementById("precioInicial").value);
        let tipo = document.getElementById("tipo").value;
        let tamano = document.getElementById("tamano").value;
        let kilos = parseFloat(document.getElementById("kilos").value);
    
        if (isNaN(precioInicial) || isNaN(kilos) || precioInicial < 0 || kilos < 0) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }
    
        let ajuste;
        if (tipo === "A") {
            if (tamano === "1") {
                ajuste = 0.20; 
            } else {
                ajuste = 0.30; 
            }
        } else if (tipo === "B") {
            if (tamano === "1") {
                ajuste = -0.30; 
            } else {
                ajuste = -0.50; 
            }
        }
    
        let precioFinal = precioInicial + ajuste;
    
        let gananciaTotal = kilos * precioFinal;
    
        document.getElementById("resultado37").innerHTML =
            `Precio inicial por kilo: $${precioInicial.toFixed(2)}<br>` +
            `Tipo de uva: ${tipo}<br>` +
            `Tamaño de uva: ${tamano}<br>` +
            `Ajuste aplicado: $${ajuste.toFixed(2)}<br>` +
            `Precio final por kilo: $${precioFinal.toFixed(2)}<br>` +
            `Kilos de uva: ${kilos}<br>` +
            `Ganancia total: $${gananciaTotal.toFixed(2)}`;
    }

    // Ejercicio 38: Escuela

    function calcularCostos() {
        let alumnos = parseInt(document.getElementById("alumnos").value);
    
        if (isNaN(alumnos) || alumnos <= 0) {
            alert("Por favor, ingrese un número válido de alumnos.");
            return;
        }
    
        let costoPorAlumno;
        let pagoCompania;
    
        if (alumnos >= 100) {
            costoPorAlumno = 65.00;
            pagoCompania = alumnos * costoPorAlumno;
        } else if (alumnos >= 50) {
            costoPorAlumno = 70.00;
            pagoCompania = alumnos * costoPorAlumno;
        } else if (alumnos >= 30) {
            costoPorAlumno = 95.00;
            pagoCompania = alumnos * costoPorAlumno;
        } else {
            costoPorAlumno = 4000.00 / alumnos; 
            pagoCompania = 4000.00;
        }
    
        document.getElementById("resultado38").innerHTML =
            `Número de alumnos: ${alumnos}<br>` +
            `Costo por alumno: $${costoPorAlumno.toFixed(2)}<br>` +
            `Pago a la compañía de autobuses: $${pagoCompania.toFixed(2)}`;
    }    

    // Ejercicio 39: Chimefon

    function Chimefon() {
        let minutos = parseFloat(document.getElementById("minutos").value);
        let dia = document.getElementById("dia").value;
        let turno = document.getElementById("turno").value;
    
        if (isNaN(minutos) || minutos < 0) {
            alert("Por favor, ingrese una duración válida.");
            return;
        }
    
        let costo = 0;
        if (minutos <= 5) {
            costo = minutos * 1.00; 
        } else if (minutos <= 8) {
            costo = 5 * 1.00 + (minutos - 5) * 0.80; 
        } else if (minutos <= 10) {
            costo = 5 * 1.00 + 3 * 0.80 + (minutos - 8) * 0.70; 
        } else {
            costo = 5 * 1.00 + 3 * 0.80 + 2 * 0.70 + (minutos - 10) * 0.50; 
        }
    
        let impuesto;
        if (dia === "domingo") {
            impuesto = costo * 0.03; 
        } else if (dia === "habil") {
            if (turno === "matutino") {
                impuesto = costo * 0.15; 
            } else if (turno === "vespertino") {
                impuesto = costo * 0.10; 
            }
        }
    
        let costoTotal = costo + impuesto;
    
        document.getElementById("resultado39").innerHTML =
            `Duración de la llamada: ${minutos} minutos<br>` +
            `Costo por tiempo: $${costo.toFixed(2)}<br>` +
            `Impuesto (${dia === "domingo" ? "3%" : (turno === "matutino" ? "15%" : "10%")}): $${impuesto.toFixed(2)}<br>` +
            `Costo total: $${costoTotal.toFixed(2)}`;
    }    

    // Ejercicio 40: Viajes

    function calcularViaje() {
        let tipoAutobus = document.getElementById("tipoAutobus").value;
        let kilometros = parseInt(document.getElementById("kilometros").value);
        let personas = parseInt(document.getElementById("personas").value);
    
        if (isNaN(kilometros) || isNaN(personas) || personas < 0) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }
    
        let costoPorKm;
        if (tipoAutobus === "A") {
            costoPorKm = 2.0;
        } else if (tipoAutobus === "B") {
            costoPorKm = 2.5;
        } else if (tipoAutobus === "C") {
            costoPorKm = 3.0;
        }
    
        if (personas < 20) {
            personas = 20;
        }
    
        let costoTotal = costoPorKm * kilometros * personas;
        let costoPorPersona = costoTotal / personas;
    
        document.getElementById("resultado40").innerHTML =
            `Tipo de autobús: ${tipoAutobus}<br>` +
            `Kilómetros recorridos: ${kilometros}<br>` +
            `Número de personas: ${personas}<br>` +
            `Costo total del viaje: $${costoTotal.toFixed(2)}<br>` +
            `Costo por persona: $${costoPorPersona.toFixed(2)}`;
    }

// Ejercicio 41: Dr Lorenzo

function calcularCostoCita() {
        let numeroCita = parseInt(document.getElementById("numeroCita").value);
    
        if (isNaN(numeroCita) || numeroCita <= 0) {
            alert("Por favor, ingrese un número de cita válido.");
            return;
        }
    
        let costoActual;
        let montoTotal = 0;
    
        for (let i = 1; i <= numeroCita; i++) {
            if (i <= 3) {
                costoActual = 200.00;
            } else if (i <= 5) {
                costoActual = 150.00;
            } else if (i <= 8) {
                costoActual = 100.00;
            } else {
                costoActual = 50.00;
            }
            montoTotal += costoActual;
        }
    
        document.getElementById("resultado41").innerHTML =
            `Número de cita: ${numeroCita}<br>` +
            `Costo de la cita actual: $${costoActual.toFixed(2)}<br>` +
            `Monto total pagado: $${montoTotal.toFixed(2)}`;
}

// Ejercicio 42: Paquete

function calcularCostoPaquete() {
        let peso = parseFloat(document.getElementById("peso").value);
        let zona = document.getElementById("zona").value;
    
        if (peso > 5) {
            document.getElementById("resultado42").textContent =
                "El paquete no puede ser transportado (peso superior a 5 kg).";
            return;
        }
    
        let costo;
        switch (zona) {
            case "norte":
                costo = peso * 10.00;
                break;
            case "centro":
                costo = peso * 8.00;
                break;
            case "sur":
                costo = peso * 7.00;
                break;
            case "europa":
                costo = peso * 15.00;
                break;
            case "asia":
                costo = peso * 12.00;
                break;
            default:
                costo = 0;
        }
    
        document.getElementById("resultado42").textContent =
            `Costo del envío: $${costo.toFixed(2)}`;
}

// Ejercicio 43: Pueblo desconocido

function calcularNuevoLimite() {
    const limiteActual = parseFloat(document.getElementById("limite").value);
    const tipoTarjeta = parseInt(document.getElementById("tipo").value);
    let porcentajeAumento;

    if (tipoTarjeta === 1) {
      porcentajeAumento = 0.25;
    } else if (tipoTarjeta === 2) {
      porcentajeAumento = 0.35;
    } else if (tipoTarjeta === 3) {
      porcentajeAumento = 0.40;
    } else {
      porcentajeAumento = 0.50;
    }

    const nuevoLimite = limiteActual + (limiteActual * porcentajeAumento);
    document.getElementById("resultado43").textContent = `El nuevo límite de crédito es: $${nuevoLimite.toFixed(2)}`;
  }

// Ejercicio 44: SM-

function mostrarPremio() {
    let montoCompra = parseFloat(document.getElementById("montoCompra").value);
    let  = document.getElementById("sexo").value;

    if (isNaN(montoCompra) || montoCompra <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    if (montoCompra <= 25000) {
        document.getElementById("respuesta").textContent =
            "Lo sentimos, su compra no es elegible para el premio.";
        return;
    }

    let premios;
    if (sexo === "H") {
        premios = ["Balón de fútbol", "Reloj inteligente", "Auriculares inalámbricos"];
    } else {
        premios = ["Bolso de moda", "Kit de maquillaje", "Vale de spa"];
    }

    document.getElementById("resultado44").innerHTML =
        `¡Felicidades! Ha ganado los siguientes premios:<br>` +
        `1. ${premios[0]}<br>` +
        `2. ${premios[1]}<br>` +
        `3. ${premios[2]}`;
}

// Ejercicio 45: Menudo

function calcular() {
    const num1 = parseFloat(document.getElementById("num15").value);
    const num2 = parseFloat(document.getElementById("num26").value);
    const operacion = document.getElementById("operacion").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("resultado45").textContent = "Por favor ingresa números válidos.";
      return;
    }

    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
        if (num2 === 0) {
          document.getElementById("resultado45").textContent = "Error: No se puede dividir entre 0.";
          return;
        }
        resultado = num1 / num2;
        break;
      default:
        resultado = "Operación no válida.";
    }

    document.getElementById("resultado45").textContent = `Resultado: ${resultado}`;
  }

// Ejercicio 46: Datado
function realizarOperacion() {
    const numero = parseInt(document.getElementById("numero").value);
    const opcion = document.getElementById("opcion").value;
    const resultadoDiv = document.getElementById("resultado46");

    if (isNaN(numero) || numero < 0) {
      resultadoDiv.textContent = "Por favor, introduce un número válido y positivo.";
      return;
    }

    if (opcion === "primo") {
      if (numero < 2) {
        resultadoDiv.textContent = `${numero} no es primo.`;
        return;
      }
      let esPrimo = true;
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          esPrimo = false;
          break;
        }
      }
      resultadoDiv.textContent = esPrimo ? `${numero} es primo.` : `${numero} no es primo.`;
    } else if (opcion === "factorial") {
      let factorial = 1;
      for (let i = 2; i <= numero; i++) {
        factorial *= i;
      }
      resultadoDiv.textContent = `El factorial de ${numero} es ${factorial}.`;
    } else if (opcion === "tabla") {
      let tabla = `Tabla del ${numero}:\n`;
      for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
      }
      resultadoDiv.textContent = tabla;
    }
  }

// Ejercicio 47: Cuñados

function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function mostrarPrimos() {
    const n = parseInt(document.getElementById("numero47").value);
    const resultadoDiv = document.getElementById("resultado47");

    if (isNaN(n) || n < 2) {
      resultadoDiv.textContent = "Por favor, introduce un número mayor o igual a 2.";
      return;
    }

    let primos = [];
    for (let i = 2; i <= n; i++) {
      if (esPrimo(i)) {
        primos.push(i);
      }
    }

    resultadoDiv.textContent = `Números primos entre 1 y ${n}:\n${primos.join(', ')}`;
  }

// Ejercicio 48: N personas

function calcularPorcentajes() {
    let n = parseInt(document.getElementById("n").value);

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let generos = [];
    for (let i = 0; i < n; i++) {
        let genero = Math.random() < 0.5 ? "H" : "M"; 
        generos.push(genero);
    }

    let hombres = generos.filter(g => g === "H").length;
    let mujeres = generos.filter(g => g === "M").length;

    let porcentajeHombres = (hombres / n) * 100;
    let porcentajeMujeres = (mujeres / n) * 100;

    document.getElementById("resultado48").innerHTML =
        
        `<strong>Número de hombres:</strong> ${hombres}<br>` +
        `<strong>Número de mujeres:</strong> ${mujeres}<br>` +
        `<strong>Porcentaje de hombres:</strong> ${porcentajeHombres.toFixed(2)}%<br>` +
        `<strong>Porcentaje de mujeres:</strong> ${porcentajeMujeres.toFixed(2)}%`;
}

// Ejercicio 49: For

function capturarNumerosa() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i}:`));
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            i--; 
        } else {
            suma += numero;
        }
    }

    document.getElementById("resultado49").textContent =
        `La suma de los 5 números es: ${suma}`;
}


// Ejercicio 50: Pares 1yN

function mostrarPares() {
    const n = parseInt(document.getElementById("numero50").value);
    const resultadoDiv = document.getElementById("resultado500");

    if (isNaN(n) || n < 1) {
      resultadoDiv.textContent = "Por favor, introduce un número mayor o igual a 1.";
      return;
    }

    let pares = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        pares.push(i);
      }
    }

    resultadoDiv.textContent = `Números pares entre 1 y ${n}:\n${pares.join(', ')}`;
  }

// Ejercicio 51: Supermar

function procesarVentas() {
    const input = document.getElementById("ventasInput").value;
    const ventas = input.split(",").map(v => parseFloat(v.trim())).filter(v => !isNaN(v));

    const resultadoDiv = document.getElementById("resultado51");

    if (ventas.length !== 15) {
      resultadoDiv.textContent = "Por favor, ingresa exactamente 15 valores numéricos separados por comas.";
      return;
    }

    const mayores550 = ventas.filter(v => v > 550);
    const entre200y550 = ventas.filter(v => v > 200 && v <= 550);

    const promedio = arr => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

    let salida = "";
    salida += `1. Cantidad de ventas mayores a 550: ${mayores550.length}\n`;
    
    salida += `2. Cantidad de ventas mayores a 200 y menores o iguales a 550: ${entre200y550.length}\n`;
    salida += `3. Promedio de ventas mayores a 550: ${promedio(mayores550).toFixed(2)}\n`;
    salida += `   Promedio de ventas entre 200 y 550: ${promedio(entre200y550).toFixed(2)}\n`;
    salida += `4. Ventas mayores a 550: ${mayores550.join(", ")}\n`;
    salida += `5. Ventas entre 200 y 550: ${entre200y550.join(", ")}`;

    resultadoDiv.textContent = salida;
  }

// Ejercicio 52: Mientras

function calcularSumas() {
    let suma = 0;
    let cantidades = [];
    let contador = 0;

    while (contador < 10) {
        let cantidad = Math.floor(Math.random() * 100) + 1; // Números entre 1 y 100
        cantidades.push(cantidad);
        suma += cantidad;
        contador++;
    }

    document.getElementById("resultado52").innerHTML =
        `<strong>Cantidades generadas:</strong> ${cantidades.join(", ")}<br>` +
        `<strong>Suma total:</strong> ${suma}`;
}

// Ejercicio 53: Edad

function generarCampos() {
    const contenedor = document.getElementById("edadesInput");
    const num = parseInt(document.getElementById("numAlumnos").value);
    contenedor.innerHTML = "";

    if (isNaN(num) || num <= 0) {
      contenedor.innerHTML = "<p style='color:red;'>Ingrese un número válido de alumnos.</p>";
      return;
    }

    for (let i = 1; i <= num; i++) {
      contenedor.innerHTML += `
        <label>Edad del alumno ${i}:</label>
        <input type="number" id="edad${i}" min="0" placeholder="Edad ${i}">
      `;
    }
    contenedor.innerHTML += `<button onclick="calcularPromedio(${num})">Calcular Promedio</button>`;
  }

  function calcularPromedio(total) {
    let suma = 0;
    for (let i = 1; i <= total; i++) {
      const edad = parseInt(document.getElementById(`edad${i}`).value);
      if (isNaN(edad) || edad < 0) {
        document.getElementById("resultado53").textContent = `Edad inválida en el alumno ${i}`;
        return;
      }
      suma += edad;
    }
    const promedio = (suma / total).toFixed(2);
    document.getElementById("resultado53").textContent = `La edad promedio del grupo es: ${promedio} años.`;
  }

// Ejercicio 54: Altura


function calcularEstaturaPromedio() {
    let estaturas = [];
    let sumaEstaturas = 0;
    let contador = 0;
    while (true) {
        let estatura = (Math.random() * (2.00 - 1.50) + 1.50).toFixed(2); // Entre 1.50 y 2.00
        estaturas.push(estatura);
        sumaEstaturas += parseFloat(estatura);
        contador++;
        let continuar = confirm(`Estatura registrada: ${estatura} m. ¿Desea registrar otra estatura?`);
        if (!continuar) break;
    }

    let promedio = sumaEstaturas / contador;
    document.getElementById("resultado54").innerHTML =
        `<strong>Estaturas generadas:</strong> ${estaturas.join(", ")} m<br>` +
        `<strong>Estatura promedio:</strong> ${promedio.toFixed(2)} m`;
}

// Ejercicio 55: Ahorro

function calcularAhorro() {
    let ahorros = [];
    let ahorroTotal = 0;

    for (let mes = 1; mes <= 12; mes++) {
        let ahorro = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        ahorros.push(ahorro);
        ahorroTotal += ahorro;
    }

    let resultado = "<strong>Ahorro mensual:</strong><br>";
    ahorros.forEach((ahorro, index) => {
        resultado += `Mes ${index + 1}: $${ahorro}<br>`;
    });
    resultado += `<strong>Ahorro total en el año:</strong> $${ahorroTotal}`;

    document.getElementById("resultado55").innerHTML = resultado;
}

// Ejercicio 56: Fibo

function generarFibonacci() {
    let n3 = parseInt(document.getElementById("n3").value);

    if (isNaN(n3) || n3 <= 0) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let fibonacci = [0, 1];
    for (let i = 2; i < n3; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    document.getElementById("resultado56").textContent =
        `Sucesión de Fibonacci (${n3} elementos): ${fibonacci.join(", ")}`;
}

// Ejercicio 57: Empresa

function calcularSueldo() {
    let horasTrabajadas = [];
    let totalHoras = 0;
    const tarifaPorHora = 30; 

    for (let dia = 1; dia <= 6; dia++) {
        let horas = Math.floor(Math.random() * (12 - 4 + 1)) + 4;
        horasTrabajadas.push(horas);
        totalHoras += horas;
    }

    let sueldo = totalHoras * tarifaPorHora;

    document.getElementById("resultado57").innerHTML =
        `<strong>Horas trabajadas por día:</strong> ${horasTrabajadas.join(", ")}<br>` +
        `<strong>Total de horas trabajadas:</strong> ${totalHoras}<br>` +
        `<strong>Sueldo semanal:</strong> $${sueldo}`;
}

// Ejercicio 58: Kilometros

function calcularEncuentro() {
    const velocidad = 60; 
    const distanciaInicial = 150 - 70; 
    const tiempoEncuentro = distanciaInicial / (2 * velocidad); 

    const puntoEncuentro = 70 + (velocidad * tiempoEncuentro);

    document.getElementById("resultado58").textContent =
        `Las dos personas se encontrarán en el kilómetro ${puntoEncuentro.toFixed(2)} de la carretera.`;
}

// Ejercicio 59: tiki taka

function analizarVentas() {
    let n45 = parseInt(document.getElementById("n45").value);

    let ventas = [];
    let ventasMayores1000 = 0;
    let ventas500a1000 = 0;
    let ventasMenores500 = 0;
    let montoMayores1000 = 0;
    let monto500a1000 = 0;
    let montoMenores500 = 0;

    // Generar ventas aleatorias entre $100 y $1500
    for (let i = 0; i < n45; i++) {
        let venta = Math.floor(Math.random() * (1500 - 100 + 1)) + 100;
        ventas.push(venta);

        if (venta > 1000) {
            ventasMayores1000++;
            montoMayores1000 += venta;
        } else if (venta > 500) {
            ventas500a1000++;
            monto500a1000 += venta;
        } else {
            ventasMenores500++;
            montoMenores500 += venta;
        }
    }

    let montoTotal = montoMayores1000 + monto500a1000 + montoMenores500;

    // Mostrar el resultado
    document.getElementById("resultado59").innerHTML =
        `<strong>Ventas generadas:</strong> ${ventas.join(", ")}<br><br>` +
        `<strong>Ventas mayores a $1000:</strong> ${ventasMayores1000} (Monto: $${montoMayores1000})<br>` +
        `<strong>Ventas entre $500 y $1000:</strong> ${ventas500a1000} (Monto: $${monto500a1000})<br>` +
        `<strong>Ventas menores o iguales a $500:</strong> ${ventasMenores500} (Monto: $${montoMenores500})<br>` +
        `<strong>Monto total de ventas:</strong> $${montoTotal}`;
}

// Ejercicio 60: Tecnovivir

function calcularNomina() {
    const tarifaPorHora = 30000; 
    let totalNomina = 0;
    let horasTrabajadas = [];

    for (let i = 0; i < 50; i++) {
        let horas = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
        horasTrabajadas.push(horas);
        totalNomina += horas * tarifaPorHora
    }

    document.getElementById("resultado60").innerHTML =
        `<strong>Horas trabajadas por obrero:</strong> ${horasTrabajadas.join(", ")}<br>` +
        `<strong>Total de la nómina:</strong> ${totalNomina.toLocaleString()} Bolívares`;
}

// Ejercicio 61: caja registradora
let total2 = 0;

function agregarProducto() {
  const producto = document.getElementById("producto").value.trim();
  const precio = parseInt(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);

  if (producto && !isNaN(precio) && !isNaN(cantidad) && precio > 0 && cantidad > 0) {
    const subtotal = precio * cantidad;
    total2 += subtotal;

    document.getElementById("total2").textContent = `Total a pagar: $${total2}`;
}
}

// Ejercicio 62: 10 cant

function calcularSuma2() {
    let suma = 0;
    let cantidades = [];
    for (let i = 0; i < 10; i++) {
        let cantidad = Math.floor(Math.random() * 100) + 1;
        cantidades.push(cantidad);
        suma += cantidad;
    }

    document.getElementById("resultado62").innerHTML =
        `<strong>Cantidades generadas:</strong> ${cantidades.join(", ")}<br>` +
        `<strong>Suma total:</strong> ${suma}`;
}

// Ejercicio 63 
function generarCampos63() {
    const n = parseInt(document.getElementById("numCantidades").value);
    const contenedor = document.getElementById("inputsNumeros");
    contenedor.innerHTML = "";

    for (let i = 0; i < n; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.className = "numInput";
      input.placeholder = `Número ${i + 1}`;
      contenedor.appendChild(input);
    }

    document.getElementById("btnAnalizar").style.display = "inline";
    document.getElementById("resultado").innerHTML = "";
  }

  function analizarNumeros12() {
    const inputs = document.querySelectorAll(".numInput");
    let mayoresCero = 0;
    let menoresOIgualesCero = 0;

    inputs.forEach(input => {
      const valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        if (valor > 0) {
          mayoresCero++;
        } else {
          menoresOIgualesCero++;
        }
      }
    });

    document.getElementById("resultado63").innerHTML = `
      ✅ Cantidades mayores a cero: ${mayoresCero}<br>
      ❌ Cantidades menores o iguales a cero: ${menoresOIgualesCero}
    `;
  }

// Ejercicio 64 ***window.onload = function() {
      const contenedor = document.getElementById("inputs");
      for (let i = 1; i <= 10; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = `Número ${i}`;
        input.classList.add("numero");
        contenedor.appendChild(input);
      }

    function calcularSuma() {
      const inputs = document.querySelectorAll(".numero");
      let numeros = [];
      let suma = 0;

      for (let input of inputs) {
        let valor = parseFloat(input.value);
        if (isNaN(valor)) {
          alert("Por favor, completa todos los campos con números válidos.");
          return;
        }
        numeros.push(valor);
        suma += valor;
      }

      document.getElementById("resultado64").innerHTML = `
        Números ingresados: [${numeros.join(", ")}] <br>
        ✅ Suma total: <strong>${suma}</strong>
      `;
    }
// Ejercicio 65

function crearEntradas() {
    const cantidad = parseInt(document.getElementById("cantidad14").value);
    const contenedor = document.getElementById("inputs2");
    contenedor.innerHTML = "";

    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Ingresa un número válido mayor que 0.");
      return;
    }

    for (let i = 0; i < cantidad; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = `Número ${i + 1}`;
      input.classList.add("numero");
      contenedor.appendChild(input);
    }

    document.getElementById("acciones").style.display = "block";
  }

  function procesarDatos24() {
    const entradas = document.querySelectorAll(".numero");
    let positivos = [], negativos = [];
    let sumaPos = 0, sumaNeg = 0;
    let todos = [];

    for (let entrada of entradas) {
      let valor = parseFloat(entrada.value);

      if (isNaN(valor)) {
        alert("Asegúrate de llenar todos los campos con números.");
        return;
      }

      todos.push(valor);

      if (valor >= 0) {
        positivos.push(valor);
        sumaPos += valor;
      } else {
        negativos.push(valor);
        sumaNeg += valor;
      }
    }

    const mayor = Math.max(...todos);
    const menor = Math.min(...todos);

    document.getElementById("resultado65").innerHTML = `
      ✅ <strong>Positivos:</strong> [${positivos.join(", ")}] <br>
      ➕ <strong>Suma de positivos:</strong> ${sumaPos} <br><br>

      ❌ <strong>Negativos:</strong> [${negativos.join(", ")}] <br>
      ➖ <strong>Suma de negativos:</strong> ${sumaNeg} <br><br>

      📈 <strong>Mayor número:</strong> ${mayor} <br>
      📉 <strong>Menor número:</strong> ${menor}
    `;
  }

// Ejercicio 66

let vector = [];

    function generarVector() {
      vector = [];
      for (let i = 0; i < 100; i++) {
        vector.push(Math.floor(Math.random() * 100) + 1); // Números del 1 al 100
      }
      document.getElementById("vectorMostrado").innerText = "📦 Vector generado:\n[" + vector.join(", ") + "]";
      document.getElementById("resultadoBusqueda").innerText = "";
    }

    function buscarNumero() {
      const x = parseInt(document.getElementById("valorBuscar").value);
      if (isNaN(x)) {
        alert("⚠️ Ingresa un número válido.");
        return;
      }

      const posiciones = [];
      vector.forEach((valor, index) => {
        if (valor === x) {
          posiciones.push(index);
        }
      });

      if (posiciones.length > 0) {
        document.getElementById("resultadoBusqueda").innerHTML = `✅ El número <strong>${x}</strong> se encontró en la(s) posición(es): ${posiciones.join(", ")}`;
      } else {
        document.getElementById("resultadoBusqueda").innerHTML = `❌ El número <strong>${x}</strong> no se encontró en el vector.`;
      }
    }

// Ejercicio 67 ***
function invertirVector() {
    let vector = [];

    for (let i = 0; i < 25; i++) {
      vector.push(Math.floor(Math.random() * 100) + 1);
    }

    document.getElementById("original").innerText = `[ ${vector.join(", ")} ]`;

    const invertido = [...vector].reverse();

    document.getElementById("invertido").innerText = `[ ${invertido.join(", ")} ]`;
  }

// Ejercicio 68

let numeros = [];

function agregarNumero() {
  const input = document.getElementById("numero54");
  const valor = parseInt(input.value);
  input.value = "";
  input.focus();

  if (isNaN(valor)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  if (valor < 0) {
    if (numeros.length === 0) {
      document.getElementById("resultado68").innerText = "❌ No se ingresaron números positivos.";
    } else {
      const suma = numeros.reduce((a, b) => a + b, 0);
      const promedio = suma / numeros.length;
      document.getElementById("resultado68").innerHTML = `
        ✅ Promedio: ${promedio.toFixed(2)}<br>
        🔢 Cantidad de números: ${numeros.length}
      `;
    }
    document.getElementById("numero54").disabled = true;
    return;
  }

  numeros.push(valor);
  document.getElementById("lista").innerText = numeros.join(", ");
}

// Ejercicio 69

const filas = 5;
    const columnas = 5;
    const matrizDiv = document.getElementById("matriz");

    // Crear inputs de la matriz
    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
        const input = document.createElement("input");
        input.type = "number";
        input.step = "0.1";
        input.min = "0";
        input.max = "5";
        input.placeholder = `${i},${j}`;
        input.id = `nota-${i}-${j}`;
        matrizDiv.appendChild(input);
      }
      matrizDiv.appendChild(document.createElement("br"));
    }

    function procesarMatriz() {
      const notasAprobadas = [];

      for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
          const valor = parseFloat(document.getElementById(`nota-${i}-${j}`).value);
          if (!isNaN(valor) && valor >= 3.5) {
            notasAprobadas.push(valor.toFixed(1));
          }
        }
      }

      const resultado = document.getElementById("resultado69");
      if (notasAprobadas.length > 0) {
        resultado.innerText = notasAprobadas.join(", ");
      } else {
        resultado.innerText = "❌ No hay notas aprobadas.";
      }
    }

// Ejercicio 70

function generarMatriza() {
    let matriz = [];
    let numeros = [];

    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            let numero = Math.floor(Math.random() * 99) + 1;
            matriz[i][j] = numero;
            numeros.push(numero);
        }
    }

    numeros.sort((a, b) => a - b);

    let resultado = "<strong>Matriz original:</strong><br>";
    matriz.forEach(fila => {
        resultado += fila.join(", ") + "<br>";
    });
    resultado += `<strong>Números ordenados:</strong> ${numeros.join(", ")}<br>` +
        `<strong>Menor número:</strong> ${numeros[0]}<br>` +
        `<strong>Mayor número:</strong> ${numeros[numeros.length - 1]}<br>` +
        `<strong>Promedio:</strong> ${(numeros.reduce((a, b) => a + b, 0) / numeros.length).toFixed(1)}`;

    document.getElementById("resultado70").innerHTML = resultado;
}

// Ejercicio 71

function multiplicarMatricesas() {
    let matrizA = generarMatriz(3, 3);
    let matrizB = generarMatriz(3, 3);

    let matrizResultado = multiplicar(matrizA, matrizB);

    let resultado = "<strong>Matriz A:</strong><br>" + mostrarMatriz(matrizA) +
        "<br><strong>Matriz B:</strong><br>" + mostrarMatriz(matrizB) +
        "<br><strong>Matriz Resultado (A x B):</strong><br>" + mostrarMatriz(matrizResultado);

    document.getElementById("resultado71").innerHTML = resultado;
}

function generarMatriz(filas, columnas) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 9) + 1; 
        }
    }
    return matriz;
}

function multiplicar(matrizA, matrizB) {
    let filasA = matrizA.length;
    let columnasA = matrizA[0].length;
    let columnasB = matrizB[0].length;

    let matrizResultado = [];
    for (let i = 0; i < filasA; i++) {
        matrizResultado[i] = [];
        for (let j = 0; j < columnasB; j++) {
            let suma = 0;
            for (let k = 0; k < columnasA; k++) {
                suma += matrizA[i][k] * matrizB[k][j];
            }
            matrizResultado[i][j] = suma;
        }
    }
    return matrizResultado;
}

function mostrarMatriz(matriz) {
    return matriz.map(fila => fila.join(", ")).join("<br>");
}