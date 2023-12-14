			
// POKEMONS

let dades;

let pokeArray = new Array();
let muniArray = new Array();

let superArray;

// POKEMONS
fetch("js/data/pokemon.json")
.then(function(response) { return response.json()})
.then(function(data) {
	dades = data.pokemon;
	
	for (var i = 0; i < dades.length; i++) {
		pokeArray.push(dades[i].name);
		//console.log(dades[i].name);
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
		//console.log(dades[i].name);
	}
	//console.log(dades)
	console.log("municipis: "+dades.length);
});

superArray = {
	pokemon: pokeArray,
	minicipis: muniArray
}

console.table(superArray);

//crear objeto para guardar los datos del print
let datosSet = new Object();
let arrays = [pokeArray, muniArray];
let arrayMasLargo = Math.max(...arrays.map(arr => arr.length));
console.log("array más largo con length: "+ arrayMasLargo);
// for (let i = 0; i < superArray.length; i++) {
// 	for (let j = 0; j < superArray[i])
	
// }

// METEORITS
fetch("js/data/earthMeteorites.json")
.then((response) => response.json())
.then((data) => {
	dades = data;		
	
	//console.log(dades)
	console.log("meteorit 1 : "+dades[0].name)
});