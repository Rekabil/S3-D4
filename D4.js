/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let l1 = 5;
let l2 = 2;
function area() {
  let ris = l1 * l2;
  return ris;
}
console.log(area());

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 5;
let n2 = 6;
function crazySum() {
  if (n1 === n2) {
    let ris = (n1 + n2) * 3;
    return ris;
  } else {
    let ris = n1 + n2;
    return ris;
  }
}
console.log(crazySum());
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let par = 60;

function crazyDiff() {
  if (par > 19) {
    let ris = par - 19;
    if (ris > 19) {
      let ris2 = ris * 3;
      return ris2;
    } else {
      let ris = par - 19;
      return ris;
    }
  } else {
    let ris = 19 - par;
    return ris;
  }
}
console.log(crazyDiff());

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 400;
function boundary() {
  if ((n > 20 && n < 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary());
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let mySpring = "EPICODE e una nuova avventura";

function epify() {
  let epic = "EPICODE2 ";
  if (mySpring.includes("EPICODE")) {
    return mySpring;
  } else {
    let mySpring2 = epic.concat(mySpring);
    return mySpring2;
  }
}
console.log(epify());
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n3 = 14;
function check3and7() {
  if (n3 < 0) {
    let ris = "Nope, Positive numbers only.";
    return ris;
  } else if (n3 % 3 === 0 || n3 % 7 === 0) {
    let ris = "True";
    return ris;
  } else {
    let ris = "False better luck next time.";
    return ris;
  }
}
console.log(check3and7());
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString() {
  let mySpring2 = mySpring.split("EPICODE");
  let edoc = "EDOCIPE";
  let mySpring3 = edoc.concat(mySpring2);
  return mySpring3;
}
console.log(reverseString());
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let ph = "this is a random phrase do not pay attention";
function upperFirst() {
  const ph2 = ph.split(" ");
  for (let i = 0; i < ph2.length; i++) {
    ph2[i] = ph2[i].charAt(0).toUpperCase() + ph2[i].slice(1);
  }
  const finale = ph2.join(" ");
  return finale;
}
console.log(upperFirst());
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const car = "hello";
function cutString() {
  const car2 = car.slice(1, -1);
  return car2;
}
console.log(cutString());
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  const random = [];
  for (let i = 0; i < n; i++) {
    let ran = Math.floor(Math.random() * 11);
    random.push(ran);
  }
  return random;
}
console.log(giveMeRandom(10));
/* SCRIVI QUI LA TUA RISPOSTA */
