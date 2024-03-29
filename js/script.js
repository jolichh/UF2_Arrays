// Excercici inical	
// Variables globales exercici inicial BASE DATOS
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
		//console.log("Pokemons:", pokeArray.length);

		const responseMunicipis = await fetch("js/data/municipis.json");
		const dataMunicipis = await responseMunicipis.json();
		dades = dataMunicipis.elements;
		muniArray.push(...dades.map(element => element.municipi_nom));
		//console.log("Municipis:", dades.length);

		const responseMeteorits = await fetch("js/data/earthMeteorites.json");
		const dataMeteorits = await responseMeteorits.json();
		dades = dataMeteorits;
		meteoArray.push(...dades.map(meteorit => meteorit.name));
		//console.log("Meteorits 1:", dades[5].name);

		const responseMovies = await fetch("js/data/movies.json");
		const dataMovies = await responseMovies.json();
		dades = dataMovies.movies;
		peliArray.push(...dades.map(movie => movie.title));
		//console.log("Movies:", dades[8].title);

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
	convertirArray();
}

// EXERCICI 1
// Variables globales para las tablas exercici 1
let objetoPokemonArray = new Array();
let objetoMunicipiArray = new Array();
let objetoPeliculaArray = new Array();
let objetoMeteoritArray = new Array();
let col = 4;
let objetoPokemonSinKg = new Array();
let valorLlista = "pokemon";
let url_img_flecha = "https://cdn-icons-png.flaticon.com/512/57/57032.png";
let elGrafico;
let orden = 'asc'; //gestionará el switch para ordenar

function sinKg() {
	objetoPokemonSinKg = [...objetoPokemonArray];
	objetoPokemonSinKg.forEach(element => {
		element.weight = element.weight.substring(0, element.weight.length-3);
	});
}
function asignarValorLista(dato) {
	if (elGrafico != null) {
		elGrafico.destroy();
	}
	valorLlista = dato;
	if (dato == "pokemon") {
		printList(objetoPokemonArray);
	}
	if (dato == "municipi") {
		printList(objetoMunicipiArray);
	}
	if (dato == "pelicules") {
		printList(objetoPeliculaArray);
	}
	if (dato == "meteorits") {
		printList(objetoMeteoritArray);
	}
}

// Part 1
inicialitzaPagina();
//carga base datos y carga la pagina
function inicialitzaPagina() {	
	if (elGrafico != null) {
		elGrafico.destroy();
	}
	// POKEMONS
	fetch("js/data/pokemon.json")
	.then(function(response) { return response.json()})
	.then(function(data) {
		dades = data.pokemon;

		dades.forEach(element=>{
			objetoPokemonArray.push(element);
		})
		//sinKg debe ir dentro para que cargue bien el orden de datos por el async
		sinKg(); 
		printList(objetoPokemonSinKg);
	})
	.catch(function (err) {
		console.log(err);
	});

	// Municipis
	fetch("js/data/municipis.json")
	.then(function(response) { return response.json()})
	.then(function(data) {
		dades = data.elements;
		dades.forEach(element=>{
				objetoMunicipiArray.push(element);
		})
	})
	.catch(function (err) {
		console.log(err);
	});

	// Pelicules
	fetch("js/data/movies.json")
	.then(function(response) { return response.json()})
	.then(function(data) {
		dades = data.movies;
		dades.forEach(element=>{
				objetoPeliculaArray.push(element);
		})
	})
	.catch(function (err) {
		console.log(err);
	});

	// Meteorits
	fetch("js/data/earthMeteorites.json")
	.then(function(response) { return response.json()})
	.then(function(data) {
		dades = data;
		dades.forEach(element=>{
				objetoMeteoritArray.push(element);
		})
	})
	.catch(function (err) {
		console.log(err);
	});
}
function cargarGrafic() {	
	//mi chart
	let arrayLabels = new Array();
	let arrayDadesGraf = new Array();
	let backgroundColor = new Array();
	let borderColor = new Array();
	let nomLabel = "";

	//cargar labels, datos y colores para el grafico
	if (valorLlista == 'pokemon') {
		nomLabel = "Tipus de pokemon";
		obj = [...objetoPokemonArray];
		obj.forEach(element => {
			//puede tener varios tipos, array
			element.type.forEach(tipo => {
				if (!arrayLabels.includes(tipo)) {
					arrayLabels.push(tipo);
				}
			})		
		});
	} 

	//de momento solo hay grafico para tabla pokemon
	if (valorLlista == 'pokemon') {
		//sacar datos
		for (let i = 0; i<arrayLabels.length; i++) {
			arrayDadesGraf[i] = 0;
			obj.forEach(tipo => {
				if (tipo.type.includes(arrayLabels[i])) {
					arrayDadesGraf[i] = arrayDadesGraf[i]+ 1;
				}
			})
		} 

		//assignar color para cada etiqueta
		arrayLabels.forEach(element=> {
			let rrr = Math.floor(Math.random()*256);
			let ggg = Math.floor(Math.random()*256);
			let bbb = Math.floor(Math.random()*256);

			backgroundColor.push('rgba('+rrr+','+ggg+','+bbb+', 0.2)');
			borderColor.push("rgba("+rrr+','+ggg+','+bbb+')');
		})
		
		const ctx = document.getElementById('myChart');
		const data = {
			labels: arrayLabels,
			datasets: [{
				label: nomLabel,
				data: arrayDadesGraf,
				backgroundColor: backgroundColor,
				borderColor: borderColor
			}]		
		};

		const config = {
			type: 'polarArea',
			data: data,
			options: {}
		};	
		if (elGrafico != null) {
			elGrafico.destroy();
		}
		elGrafico = new Chart(ctx, config);	
	}
}
function recargaPagina() {
	location.reload();
}

//ordena ascendente o descendente
function orderList(orden) {
	pokeOrdenado = [...objetoPokemonArray];
	muniOrdenado = [...objetoMunicipiArray];
	peliOrdenado = [...objetoPeliculaArray];
	meteoOrdenado = [...objetoMeteoritArray];

	//orden ascendente = alfabetico
	if (orden == 'asc') {
		if (valorLlista == "pokemon"){
			pokeOrdenado.sort(function(a,b){ 
				if (a.name > b.name) { return 1};	//si es mayor +1
				if (a.name < b.name) { return -1};	//es menor -1
				return 0; //si es igual ni suma ni resta
			 });
			 printList(pokeOrdenado);
		}
		else if (valorLlista == "municipi") {
			muniOrdenado.sort(function(a,b) {
				if (a.municipi_nom > b.municipi_nom) { return 1};	//si es mayor +1
				if (a.municipi_nom < b.municipi_nom) { return -1};	//es menor -1
				return 0; //si es igual ni suma ni resta
			});
			printList(muniOrdenado);
		} 
		else if (valorLlista === "pelicules") {
			peliOrdenado.sort(function(a,b) {
				if (a.rating > b.rating) { return 1};	//si es mayor +1
				if (a.rating < b.rating) { return -1};	//es menor -1
				return 0; //si es igual ni suma ni resta
			});
			printList(peliOrdenado);
		} 
		else if (valorLlista == "meteorits") {
			meteoOrdenado.sort(function(a,b) {
				if (a.name > b.name) { return 1};	//si es mayor +1
				if (a.name < b.name) { return -1};	//es menor -1
				return 0; //si es igual ni suma ni resta
			});
			printList(meteoOrdenado);
		} 			
		
	} 
	else if (orden == 'desc') {
		if (valorLlista == "pokemon"){
			pokeOrdenado.sort(function(a,b){ 
				if (a.name < b.name) { return 1};	//si es menor +1
				if (a.name > b.name) { return -1};	//es mayor -1
				return 0; //si es igual ni suma ni resta
			});
			printList(pokeOrdenado);
		}
		else if (valorLlista == "municipi") {
			muniOrdenado.sort(function(a,b) {
				if (a.municipi_nom < b.municipi_nom) { return 1};	
				if (a.municipi_nom > b.municipi_nom) { return -1};	
				return 0; 
			});
			printList(muniOrdenado);
		} 
		else if (valorLlista === "pelicules") {
			peliOrdenado.sort(function(a,b) {
				if (a.rating < b.rating) { return 1};	
				if (a.rating > b.rating) { return -1};	
				return 0; 
			});
			printList(peliOrdenado);
		} 
		else if (valorLlista == "meteorits") {
			meteoOrdenado.sort(function(a,b) {
				if (a.name < b.name) { return 1};	//si es mayor +1
				if (a.name > b.name) { return -1};	//es menor -1
				return 0; //si es igual ni suma ni resta
			});
			printList(meteoOrdenado);
		} 
	} else {
		console.log("falla el tipo de orden al ordenar");
	}	
}
//Asigna la tabla y llama al order sergun columna
function orderBy(param) {
	let arrayTabla;
	if (valorLlista == 'pokemon') {
		arrayTabla = [...objetoPokemonArray];
	}
	else if (valorLlista == 'municipi') {
		arrayTabla = [...objetoMunicipiArray];
	} 
	else if (valorLlista == 'pelicules') {
		arrayTabla = [...objetoPeliculaArray];
	} 
	else if (valorLlista == 'meteorits') {
		arrayTabla = [...objetoMeteoritArray];
	}	
	orderByTabla(arrayTabla, param);
}
function swithCaseOrden() {
	switch (orden) {
		case 'asc':
			orden = 'desc';
			break;
		case 'desc':
			orden = 'asc';
			break;
	}
}

//ordena la tabla segun el array y valor a ordenar
function orderByTabla(aOrdenar, tipo) {
	swithCaseOrden();
	if (orden == 'asc') {
		aOrdenar.sort(function(a,b){ 			
			if (a[tipo] > b[tipo]) { return 1};	//si es mayor +1
			if (a[tipo] < b[tipo]) { return -1};	//es menor -1
			return 0; //si es igual ni suma ni resta
		});			
	}
	else if (orden == 'desc') {
		aOrdenar.sort(function(a,b){ 
			if (a[tipo] < b[tipo]) { return 1};	//si es menor +1
			if (a[tipo] > b[tipo]) { return -1};	//es mayor -1
			return 0; //si es igual ni suma ni resta
		});
	} 
	else {
		console.log("falla al ordenar la tabla");
	}

	if (elGrafico != null) {
		elGrafico.destroy();
	}
	printList(aOrdenar);
}
//busqueda per coincidencia de nom ESTA VERSION NO SE USA
function searchList() {
	pokeBuscar = [...objetoPokemonArray];
	muniBuscar = [...objetoMunicipiArray];
	peliBuscar = [...objetoPeliculaArray];
	meteoBuscar = [...objetoMeteoritArray];
	let cumpleCondicion = new Array();

	let condicionBusqueda = prompt("Buscar:");
	condicionBusqueda.toLocaleLowerCase();
		
	if (valorLlista === "pokemon") {
		pokeBuscar.forEach(element => {
			if(element.name.toLocaleLowerCase().includes(condicionBusqueda)) {
				cumpleCondicion.push(element);
			}
		});
	} 
	else if (valorLlista === "municipi") {
		muniBuscar.forEach(element => {
			if(element.municipi_nom.toLocaleLowerCase().includes(condicionBusqueda)) {
				cumpleCondicion.push(element);
			}
		});
	} 
	else if (valorLlista === "pelicules") {
		peliBuscar.forEach(element => {
			if(element.title.toLocaleLowerCase().includes(condicionBusqueda)) {
				cumpleCondicion.push(element);
			}
		});
	} 
	else if (valorLlista === "meteorits") {
		meteoBuscar.forEach(element => {
			if(element.name.toLocaleLowerCase().includes(condicionBusqueda)) {
				cumpleCondicion.push(element);
			}
		});
	} 
	else {
		tabla += `<td>Algo ha ido mal cargando la lista...</td>`;
	}
	printList(cumpleCondicion);	
}
//busqueda per coincidencia de nom
function searchListLive(condicion) {
	pokeBuscar = [...objetoPokemonArray];
	muniBuscar = [...objetoMunicipiArray];
	peliBuscar = [...objetoPeliculaArray];
	meteoBuscar = [...objetoMeteoritArray];
	let cumpleCondicion = new Array();

	let condicionBusqueda = condicion;
	condicionBusqueda.toLocaleLowerCase();
		
	if (valorLlista === "pokemon") {
		pokeBuscar.forEach(element => {
			if(element.name.toLocaleLowerCase().includes(condicionBusqueda)) {
				cumpleCondicion.push(element);
			}
		});
	} 
	else if (valorLlista === "municipi") {
		muniBuscar.forEach(element => {
			if(element.municipi_nom.toLocaleLowerCase().includes(condicionBusqueda)) {
				cumpleCondicion.push(element);
			}
		});
	} 
	else if (valorLlista === "pelicules") {
		peliBuscar.forEach(element => {
			if(element.title.toLocaleLowerCase().includes(condicionBusqueda)) {
				cumpleCondicion.push(element);
			}
		});
	} 
	else if (valorLlista === "meteorits") {
		meteoBuscar.forEach(element => {
			if(element.name.toLocaleLowerCase().includes(condicionBusqueda)) {
				cumpleCondicion.push(element);
			}
		});
	} 
	else {
		tabla += `<td>Algo ha ido mal cargando la lista...</td>`;
	}
	//antes de print tabla limpia el grafico
	if (elGrafico != null) {
		elGrafico.destroy();
	}
	printList(cumpleCondicion);	
}
function calcMitjana() {
	let mitjana = 0;
	let obj = new Array();

	if (valorLlista == 'pokemon') {
		obj = [...objetoPokemonSinKg];

		obj.forEach(element => {
			mitjana += parseInt(element.weight);
		});
		mitjana = (mitjana/obj.length).toFixed(2);
		alert("La mitjana del pes d'un pokemon és de " + mitjana + " kg");
	} 
	else if (valorLlista == 'municipi') {
		obj = [...objetoMunicipiArray];

		obj.forEach(element => {
			mitjana += parseInt(element.nombre_habitants);
		});
		mitjana = (mitjana/obj.length).toFixed(2);
		alert("La mitjana d'habitants es de " + mitjana + " persones");
	}
	else if (valorLlista == 'pelicules') {
		obj = [...objetoPeliculaArray];

		obj.forEach(element => {
			mitjana += parseInt(element.rating);
		});
		mitjana = (mitjana/obj.length).toFixed(2);
		alert("La mitjana de puntuació es de " + mitjana + " /10");
	}
	else if (valorLlista == 'meteorits') {
		obj = [...objetoMeteoritArray];

		obj.forEach(element => {
			if (element.mass != null) {
				mitjana += parseInt(element.mass);
			}
		});
		mitjana = (mitjana/obj.length).toFixed(2);
		alert("La mitjana de la massa d'un meteorit es de " + mitjana);
	}
	else {
		console.log("Algo ha ido mal en calcMitjana");
	}
}
//crea la tabla y la muestra en el html
function printList(lista) {
	let div = document.getElementById("container-tabla");
	let tabla = `<table class="tabla">`;
	tabla += `<tr>`;

	//asignar titulos de la tabla
	if (valorLlista === "pokemon") {
		tabla += `<td># <img class="img_"src="${url_img_flecha}" onclick="orderBy('id')" width="15px"></td>`;
		tabla += `<td>image</td>`;
		tabla += `<td>name <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('name')"></td>`;
		tabla += `<td>weight <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('weight')"></td>`;
	}
	if (valorLlista === "municipi") {
		tabla += `<td>INE <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('ine')"></td>`;
		tabla += `<td>image</td>`;
		tabla += `<td>name <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('municipi_nom')"></td>`;
		tabla += `<td>Habitants <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('nombre_habitants')"></td>`;	
	}
	if (valorLlista === "pelicules") {
		tabla += `<td>Title <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('title')"></td>`;
		tabla += `<td>image</td>`;
		tabla += `<td>year <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('year')"></td>`;
		tabla += `<td>Rating <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('rating')"></td>`;	
	}
	if (valorLlista === "meteorits") {
		tabla += `<td>Id <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('id')"></td>`;
		tabla += `<td>Recclass <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('recclass')"></td>`;
		tabla += `<td>Name <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('name')"></td>`;
		tabla += `<td>Mass <img class="img_" src="${url_img_flecha}" width="15px" onclick="orderBy('mass')"></td>`;	
	}
	
	tabla += `<tr>`;
	for (var i = 0; i < lista.length; i++) {
		tabla += `<tr>`;
		if (valorLlista === "pokemon") {
			tabla += `<td>${lista[i].id}  </td>`;
			tabla += `<td><img src="${lista[i].img}"></td>`;
			tabla += `<td>${lista[i].name}</td>`;
			tabla += `<td>${lista[i].weight} kg</td>`;		
		} 
		else if (valorLlista === "municipi") {
			tabla += `<td>${lista[i].ine} </td>`;
			tabla += `<td><img src="${lista[i].municipi_vista}"></td>`;
			tabla += `<td>${lista[i].municipi_nom}</td>`;
			tabla += `<td>${lista[i].nombre_habitants}</td>`;		
		} 
		else if (valorLlista === "pelicules") {
			tabla += `<td>${lista[i].title}  </td>`;
			tabla += `<td><img src="${lista[i].url}"></td>`;
			tabla += `<td>${lista[i].year}</td>`;
			tabla += `<td>${lista[i].rating}</td>`;		
		} 
		else if (valorLlista === "meteorits") {
			tabla += `<td>${lista[i].id}  </td>`;
			tabla += `<td>${lista[i].recclass}</td>`;
			tabla += `<td>${lista[i].name}</td>`;
			tabla += `<td>${lista[i].mass}</td>`;		
		} 
		else {
			tabla += `<td>Algo ha ido mal cargando la lista...</td>`;
		}
	}
	tabla += `</tr>`;
	tabla += `</table>`;
	div.innerHTML = tabla;
	cargarGrafic();
}


//Transformant array d'objectes a array d'array
//usando data del fetching exercici 1
//Com les anteriors son arrays d'objectes, les pasarem a array d'arrays
function convertirArray() {

	const arrayDeArraysPokemon = objetoPokemonArray.map(objeto => Object.values(objeto));
	const arrayDeArraysMunicipi = objetoMunicipiArray.map(objeto => Object.values(objeto));
	const arrayDeArraysPelicula = objetoPeliculaArray.map(objeto => Object.values(objeto));
	const arrayDeArraysMeteorit = objetoMeteoritArray.map(objeto => Object.values(objeto));

	console.log("Transformació de array-objects:");
	console.log("   ARRAY pokemon posició 3: "+arrayDeArraysPokemon[2]);
	console.log("   ARRAY municipi posició 1: "+arrayDeArraysMunicipi[0]);
	console.log("   ARRAY pelicul·la posició 4: "+arrayDeArraysPelicula[3]);
	console.log("   ARRAY meteorit posició 5: "+arrayDeArraysMeteorit[4]);
}