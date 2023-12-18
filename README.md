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