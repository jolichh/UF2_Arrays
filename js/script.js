			
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
	
  
// POKEMONS
fetch("js/data/pokemon.json")
.then(function(response) { return response.json()})
.then(function(data) {
	dades = data.pokemon;
	
	for (var i = 0; i < dades.length; i++) {
		pokeArray.push(dades[i].name);
	}
	console.log("pokemons: "+pokeArray.length);
})
.catch(function (err) {
	console.log(err);
});

// MUNICIPIS
fetch("js/data/municipis.json")
.then(function (response) { return response.json() })
.then(function(data) {
	dades = data.elements;		
	
	for (var i = 0; i < dades.length; i++) {
		muniArray.push(dades[i].municipi_nom);
	}
	console.log("municipis: "+dades.length);
})
.catch(function (err) {
	console.log(err);
});

// METEORITS
fetch("js/data/earthMeteorites.json")
.then((response) => response.json())
.then((data) => {
	dades = data;		
	
	for (var i = 0; i < dades.length; i++) {
		meteoArray.push(dades[i].name);
	}
	console.log("meteorit 1 : "+dades[5].name)
})
.catch(function (err) {
	console.log(err);
});

// MOVIES
fetch("js/data/movies.json")
.then((response) => response.json())
.then((data) => {
	dades = data.movies;		
	
	for (var i = 0; i < dades.length; i++) {
		peliArray.push(dades[i].title);
	}
	console.log(dades[8].title);

	//llamada desde ultimo fetch para asegurarse que no hay undefineds
	mostrarConsola();

})
.catch(function (err) {
	console.log(err);
});

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