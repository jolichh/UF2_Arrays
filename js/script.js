// Excercici inical	
// Variables globales exercici inicial
let dades;
let pokeArray = new Array();
let muniArray = new Array();
let peliArray = new Array();
let meteoArray = new Array();
let tablaData = new Object();	//se usa para mostrar tabla vertical
let maxLength;

let superArray = {
	pokemon: pokeArray,
	minicipis: muniArray,
	pelicules: peliArray,
	meteorits: meteoArray
}

fetchingData();
async function fetchingData() {
	try {
		const responsePokemon = await fetch("js/data/pokemon.json");
		const dataPokemon = await responsePokemon.json();
		dades = dataPokemon.pokemon;
		pokeArray.push(...dades.map(pokemon => pokemon.name));
		console.log("Pokemons:", pokeArray.length);

		const responseMunicipis = await fetch("js/data/municipis.json");
		const dataMunicipis = await responseMunicipis.json();
		dades = dataMunicipis.elements;
		muniArray.push(...dades.map(element => element.municipi_nom));
		console.log("Municipis:", dades.length);

		const responseMeteorits = await fetch("js/data/earthMeteorites.json");
		const dataMeteorits = await responseMeteorits.json();
		dades = dataMeteorits;
		meteoArray.push(...dades.map(meteorit => meteorit.name));
		console.log("Meteorits 1:", dades[5].name);

		const responseMovies = await fetch("js/data/movies.json");
		const dataMovies = await responseMovies.json();
		dades = dataMovies.movies;
		peliArray.push(...dades.map(movie => movie.title));
		console.log("Movies:", dades[8].title);

		mostrarConsola();
	} catch(error) {
		console.log("Error en fetch data", error);
	}
}
function mostrarConsola() {
	maxLength = Math.max(
		superArray.pokemon.length,
		superArray.minicipis.length,
		superArray.pelicules.length,
		superArray.meteorits.length
	);

	// Crear un array de objetos para representar la tabla
	tablaData = Array.from({ length: maxLength }, (_, index) => ({
		Pokemon: superArray.pokemon[index] || '',
		Minicipis: superArray.minicipis[index] || '',
		Pel·licules: superArray.pelicules[index] || '',
		EarthMeteorite: superArray.meteorits[index] || ''
	}));
	console.table(tablaData);
}

// EXERCICI 1
// Variables globales exercici 1
let objetoPokemonArray = new Array();
let col = 4;
let objetoPokemonSinKg = new Array();
function sinKg() {
	objetoPokemonSinKg = objetoPokemonArray.map(function (alumno) {
		return { edad: alumno.edad, peso: parseInt(alumno.peso) };
	});
}


// Part 1
inicialitzaPagina();
function inicialitzaPagina() {	
	// POKEMONS
	fetch("js/data/pokemon.json")
	.then(function(response) { return response.json()})
	.then(function(data) {
		dades = data.pokemon;
		let div = document.getElementById("container-tabla");
		let tabla = `<table id="tabla">`;
		tabla += `<tr>`;
		tabla += `<td>#</td>`;
		tabla += `<td>image</td>`;
		tabla += `<td>name</td>`;
		tabla += `<td>weight</td>`;
		tabla += `<tr>`;
		for (var i = 0; i < dades.length; i++) {
			tabla += `<tr>`;
			objetoPokemonArray.push(dades[i]);
			tabla += `<td>${objetoPokemonArray[i].id}  </td>`;
			tabla += `<td><img src="${objetoPokemonArray[i].img}"></td>`;
			tabla += `<td>${objetoPokemonArray[i].name}</td>`;
			tabla += `<td>${objetoPokemonArray[i].weight}</td>`;
			
		}
		tabla += `</tr>`;
		tabla += `</table>`;
		div.innerHTML = tabla;

		console.log("pokemons: "+objetoPokemonArray.length);
		console.log(objetoPokemonArray);
		})
	.catch(function (err) {
		console.log(err);
	});

	sinKg();
}

function recargaPagina() {
	location.reload();
}

//ordena ascendente o descendente
function orderList(orden) {
	pokeOrdenado = [...objetoPokemonArray];

	//orden ascendente = alfabetico
	if (orden == 'asc') {
		pokeOrdenado.sort();
	} else if (orden == 'desc') {
		pokeOrdenado.reverse();
	} else {
		console.log("falla el tipo de orden al ordenar");
	}
	
	printList(pokeOrdenado);
}

//busqueda per coincidencia de nom
function searchList() {
	pokeBuscar = [...objetoPokemonArray];

	let condicionBusqueda = prompt("Buscar:");
	condicionBusqueda.toLocaleLowerCase();

	let cumpleCondicionPoke = new Array();
	pokeBuscar.forEach(element => {
		if(element.name.toLocaleLowerCase().includes(condicionBusqueda)) {
			cumpleCondicionPoke.push(element);
		}
	});

	printList(cumpleCondicionPoke);		
}

function calcMitjana(dato) {
	let mitjana = 0;
	let obj = new Array();

	if (dato == 'pokemon') {
		obj = [...objetoPokemonSinKg];
		console.log(objetoPokemonArray[1].weight);
		console.log(objetoPokemonSinKg[1].weight);
		console.log(obj[1].weight);
		obj.forEach(element => {
			mitjana += element.weight;
		});
		alert(mitjana);
	} else {
		console.log("algo ha ido mal en calcMitjana");
	}
}

//crea la tabla y la muestra en el html
function printList(lista) {
	let div = document.getElementById("container-tabla");
	let tabla = `<table id="tabla">`;
	tabla += `<tr>`;
	tabla += `<td>#</td>`;
	tabla += `<td>image</td>`;
	tabla += `<td>name</td>`;
	tabla += `<td>weight</td>`;
	tabla += `<tr>`;
	for (var i = 0; i < lista.length; i++) {
		tabla += `<tr>`;
		tabla += `<td>${lista[i].id}  </td>`;
		tabla += `<td><img src="${lista[i].img}"></td>`;
		tabla += `<td>${lista[i].name}</td>`;
		tabla += `<td>${lista[i].weight}</td>`;
		
	}
	tabla += `</tr>`;
	tabla += `</table>`;
	div.innerHTML = tabla;
}