# UF2 Pràctica 2 Arrays: Dades massives
Per treballar amb aquest projecte necessites descarregar-te aquesta carpeta comprimida

## Part 0. Accedir al JSON i començar a llistar dades
Recorrent tot el json fes un console.log de les següents dades:

 | Pokemon | Municipis    | Pel·licules | EarthMeteorite |
 |---------|--------------|-------------|----------------|
 | Name    | municipi_nom | title       | name           |

Una vegada hagis aconseguit recórrer tot el json crea una array i emmagatzema-hi les dades que has printat en l’apartat anterior

## Part 1. Funcions i arrays
Crea les següents funcions. **Recomanació:** com que les anirem modificant et recomano que les vagis
deixant comentades al JS. Per a cada funció fes un alert per comprovar el resultat.

1. A l’html afegeix cinc botons:

    **a.** Un botó que inicialitzi tot de nou. Utilitzarem un refresh. Utilitza el location.reload().

    **b.** Un botó per ordenar de manera ascendent

    **c.** Un botó per ordenar de manera descendent

   **d.** Un botó per buscar

    **e.** Un botó que calculi la mitjana del valor afegit en l’últim bloc afegit a l’array.

2. Crea una funció que es digui **orderList** on passis per paràmetre un string que podrà ser “asc” o “desc”. La funció haurà de retornar l’array ordenada de manera ascendent o descendent en funció del que se li passi per paràmetre. Fes que quan es cliqui al botó b. cridi a la funció amb el paràmetre ascendent i quan es cliqui el botó c. amb el paràmetre descendent.

3. Fes una funció que es digui **searchList** que retorni la posició d’un element buscat mitjançant un prompt.

4. Realitza una array multidimensional que emmagatzemi més d’un valor. Exemple:
    
    **a.** [[“nom Pokemon”, img, weight], [“nom Pokemon”, img, weight]...]
    
    * Tingues en compte que si per exemple la dada és “23 kg” t’has de quedar només amb el valor numèric

    - En el cas que sigui possible, afegeix una imatge.**

5. Fes una funció que es digui **calcMitjana()** que calculi la d’un valor numèric. Mitjançant el mètode **toFixed()** força que el resultat tingui només dos decimals. Fes un alert amb el resultat.

6. Crea la funció **printList()** que creï una taula i mitjançant el DOM mostris el resultat en el div resultat

## Part 2. Creem un gràfic
A través de la llibreria Chart.js crearem un gràfic que ens mostrarà els pokemons en funció del seu tipus.

Per a fer-ho has de seguir els següents passos:
1. Afegeix la llibreria al <head> de l’index.html
```
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```
2. Afegeix el div on anirà al gràfic
```<div class="chart-container" style="position: relative; width:700px">
<canvas id="myChart"></canvas>
</div>
```
3. Analitzem l’exemple

    Getting started:
    https://www.chartjs.org/docs/latest/getting-started/

    Exemple polar chart:
    https://www.chartjs.org/docs/latest/charts/polar.html

Fixem-nos que en el getting started defineix tres elements:

    - labels
    - data
    - config

I per crear el gràfic crida a la classe Chart (inclosa a la llibreria) i li passa per paràmetre, el div on
anirà el gràfic i la configuració.

4. En el teu programa defineix 4 arrays noves.
- arrayLabels
- arrayDadesGraf
- backgroundColor
- borderColor

5. A l’inici del programa, quan carregues les dades crea un array amb els labels, tingues en compte que ha de ser un array amb valors únics, és a dir, no poden estar repetits.

6. Ara has de crear un array amb les dades que tindrà el gràfic. L’array arrayDadesGraf serà paral·lel a l’arrayLabels. És a dir, a la posició 0 d’arrayDadesGraf hi haurà la quantitat de pokemons d’aquest tipus.

7. Pels colors, diferenciarem entre el color de fons i el border. El borderColor serà el color “sencer” sense opacitat. Pel backgroundColor utilitzarem el mateix color però amb opacitat. 

    Genera un array de llargada arrayLabels.length pel color del border, fes que sigui un color aleatori. Per a fer-ho, genera un string con el següent "rgba(rrr,ggg,bbb)" on rrr, ggg i bbb siguin 3 números aleatoris entre 0 i 255. 
    
    Una vegada tinguis aquest array generat, agafa el string de cada posició i modifica-la per a que sigui rgba(rrr,ggg,bbb, 0.2)

    Utilitza les funcions que hem treballat amb els strings per a fer-ho.
8. Amb totes aquestes dades ja pots generar el gràfic