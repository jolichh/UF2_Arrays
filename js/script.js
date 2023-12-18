			
// Variables globales

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
