let nombreJugador;
let saldo = 1000000;
let flag = true;

const arrayJugadoresComprados = [];

class Jugador {
	constructor(nombre, posicion, valor) {
		this.nombre = nombre;
		this.posicion = posicion;
		this.valor = valor;
	}
}

const arrayJugadores = [
	(jugadorMarioBross = new Jugador("Mario Bross", "Delantero", 800000)),
	(jugadorLuiggi = new Jugador("Luiggi", "Medio campista", 500000)),
	(jugadorBowser = new Jugador("Bowser", "Portero", 100000)),
	(jugadorYoshi = new Jugador("Yoshi", "Defensa", 400000)),
	(jugadorToad = new Jugador("Toad", "Lateral", 300000)),
];

alert(
	"Bienvenidos al mercadeo de transferencias del mundo del Futbol Mario cup"
);

function pedirNombre() {
	nombreJugador = prompt("Por favor ingrese su nombre de directivo");
}

while (!nombreJugador) {
	pedirNombre();
}

alert(
	"El nombre ingresado es " +
		nombreJugador +
		", tener presente que el saldo inicial con el que comienzas es de $" +
		saldo
);

function menu() {
	const opcion = parseInt(
		prompt(
			"Por favor seleccione una de las siguientes opciones: \n 1)Ver jugadores disponibles en el mercado de fichajes \n 2)Ingresa un jugador al mercado \n 3)Modifica o elimina tus jugadores del mercado \n 4)Retirar jugador del mercado \n 5) Comprar jugador \n 6)Finalizar consulta"
		)
	);
	return opcion;
}

function menuModificar() {
	const opcion = parseInt(
		prompt(
			"1)Modificar nombre \n 2)Modificar posición \n 3)Modificar valor"
		)
	);
	return opcion;
}

function altaJugador() {
	const nombre = prompt(
		"Ingrese el nombre del jugador que desea colocar en el mercado"
	);
	const posicion = prompt("Ingrese la posición");
	const valor = parseInt(prompt("Ingrese el valor"));
	const jugador = new Jugador(nombre, posicion, valor);
	arrayJugadores.push(jugador);
}

function buscarJugador(mensaje = "") {
	const nombre = prompt("Ingrese el nombre del jugador" + mensaje);
	const jugadorActual = arrayJugadores.find(
		jugador => jugador.nombre === nombre
	);
	if (jugadorActual === undefined) {
		alert("No se encontró el nombre del jugador ingresado");
		return;
	}
	return jugadorActual;
}

function bajaJugador(jugador) {
	if (!jugador) {
		jugador = buscarJugador();
	}
	const indice = arrayJugadores.indexOf(jugador);
	if (indice < 0) {
		return;
	}
	arrayJugadores.splice(indice, 1);
}

function modificarNombreJugador() {
	const jugador = buscarJugador();
	const nombreNuevo = prompt("Ingrese el nuevo nombre");
	jugador.nombre = nombreNuevo;
}

function modificarPosicionJugador() {
	const jugador = buscarJugador();
	const posicionNueva = prompt("Ingrese la nueva posición");
	jugador.posicion = posicionNueva;
}

function modificiarValor() {
	const jugador = buscarJugador();
	const valorNuevo = prompt("Ingrese el nuevo valor");
	jugador.valor = valorNuevo;
}

function abrirSubMenu() {
	let opcion = menuModificar();
	switch (opcion) {
		case 1:
			modificarNombreJugador();
			break;
		case 2:
			modificarPosicionJugador();
			break;
		case 3:
			modificiarValor();
			break;
		default:
			break;
	}
}

function comprarJugador() {
	const jugador = buscarJugador(" que quiere comprar");
	if (jugador?.valor < saldo) {
		saldo -= jugador.valor;
		arrayJugadoresComprados.push(jugador);
		bajaJugador(jugador);
		alert("su saldo restante es de $" + saldo);
	}
}

function elegirOpcion(opcion) {
	switch (opcion) {
		case 1:
			let listado = "";
			arrayJugadores.forEach(
				jugador =>
					(listado += `-${jugador.nombre}, ${jugador.posicion}, ${jugador.valor} \n`)
			);
			alert(listado);
			break;
		case 2:
			altaJugador();
			break;
		case 3:
			abrirSubMenu();
			break;
		case 4:
			bajaJugador();
			break;
		case 5:
			comprarJugador();
			break;
		case 6:
			flag = false;
			alert("Gracias por visitar el mercado negro, regrese pronto!");
			break;
		default:
			alert("Elige sabiamente wahooo!");
			break;
	}
}

function repetirMenu() {
	let opcion = menu();
	elegirOpcion(opcion);
}

while (flag) {
	repetirMenu();
}
