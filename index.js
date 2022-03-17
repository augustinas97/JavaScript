//let data1 = Math.floor (Math.random) *25
//console.log

//let lapas = prompt ('Iveskite suma')
//console.log (typeoff)




//console.log ('hello world');


//let text1 = 'labas'
//let text2 = 'vakaras'
//let result = arr2.concat(arr2)
//console.log
// skaiciai



//let name = 'vardenis';
//let otherName = 'mykolas';
//let GimimoMetai = 1997;
//let dabartiniaiMetai = 2022;
//let atsakymas = `${name} ${otherName} man yra ${dabartiniaiMetai - GimimoMetai}`;
//console.log (atsakymas);

//let data = 2;
//if ( data < 2){
//    console .log(true)
//}
//else {
 //   ( data > 2)
 //   console.log(false)
//} else {
//console.log('hi')}

//let ivestaSuma = parseInt(prompt('Jusu moketina suma yra:'))

//let arbatpinigiai = 0;
//let galutinesuma;

//if (ivestaSuma <= 20) {
//  arbatpinigiai = ivestaSuma  * 0.1;
//} else if ( 20 < ivestaSuma && ivestaSuma <= 50) {
//  arbatpinigiai = ivestaSuma * 0.075;
//} else {
  //arbatpinigiai = ivestaSuma * 0.05
//}
  //galutinesuma = `Visa sumoketa suma ${ivestaSuma + arbatpinigiai} arbatpinigiai yra ${arbatpinigiai} saskaita buvo ${ivestaSuma}`;

  //console.log(galutinesuma)

//let number = parseInt(prompt('Enter the number'));

//switch(number) {
 //case 1:
     //console.log ('print 1')
     //break;
     //case 2:
        // console.log ('print 2')
      //   break;
    //     default:
  //       console.log('print default')
//}

//let veisles = ['suo', 'suo2', 'suo4', 'suo3']; 
//console.log('veisles')


//const baldai = ['lempa', 'lentynos', 'sofa', 'stalas']
//idet, isimt, pakeist kintamuosius//
//baldai.push ('kede')
//console.log
//baldai.pop ('lentynos')
//baldai.shift()

//const saldytuvas = {
//kiausiniai: 3,
//morkos: 5,
//sviestas: 0.5,
//vynuoges: 'nemazai',
//darzoves:  ['morka', 'pomidoras', 'salieras', 'cukinja']
//}
//console.log(saldytuvas)

//const apdovanojimai = {
  //  1: "jav",
    //2: "kinija",
    //3: "rumunija",
//}
//apdovanojimai[1]

//PABAGTI
//const pasta = {
   // sudetis: ["tuna","makaronai","suris","rukola","padazas"],
    //vieta: "restornas",
//}
//let ivertinimas = prompt("irasykite skaiciu nuo 1 iki 10")
//let

//const ManoMasyvas = [saldytuvas, {}, {},]
//console.log(saldytuvas)
//console.table()
 

//for (let i=1; i <= 10; i++) {
  //   console.log(i)
 //}
 //!!!!VISADA NUSIRODYT TEISINGA REIKSME

 //for (let i = 20; i >= 0; i = i - 4){
 //    console.log(i)
// }

//for (let i = 2; i <= 0; i = i + 7) {
  //  console.log(i)
//}

//const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

//for ( let i = 0; i <= skaiciai.length -1; i++) {
  //if(skaiciai[i] % 2=== 0) {
  //  console.log(skaiciai[i])
  //}
//}

//const myArr = ['One', 'Two', 'Sofa', 'Stalas', 'test']

//for (let i = myArr.length -1; i >=0; i--) {
  //console.log(myArr[i])
//}

//const skaiciai = [0, 5, 29, 23, 4, 5, 2, 5, 24, 89, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];

//const daugiauNeiAstuoni = [];
//for (let i = 0; i< skaiciai.length; i++) {
 // if(skaiciai[i] > 8) {
  //  daugiauNeiAstuoni.push(skaiciai[i])
 // }
//}
//console.log(daugiauNeiAstuoni)


// Uzduotis
const numbersArr = [2, 45, 3, 67, 34, 567, 34, 345, 123, 593]; 
let didziausiasSkaicius = 0;
for (let i = 0; i <= numbersArr.length - 1; i++) {
  if(didziausiasSkaicius < numbersArr[i]) {
    didziausiasSkaicius = numbersArr[i]
  }
}
console.log(didziausiasSkaicius)
// naudojantis for loop'u surasti didziausia skaiciu

// Nested loops
//for (let isorinis = 1; isorinis <= 4; isorinis++){
  //console.log(`Isorinis loop'as sukasi ${isorinis} karta`)
  //for(let vidinis = 1; vidinis < 5; vidinis++) {
    //console.log(`  Vidinis loopas sukasi ${vidinis} karta`)
  //}
//}
//const activities = [
  //['Work', 9],
  //['Eat', 1],
  //['Commute', 2],
  //['Play Game', 1],
  //['Sleep', 7]




//for(let i = 1; i < activities.length; i++) {
//console.log(`Eitule ${1 + 1}`) 
//for (let j = 0; j < activities[i].length; j++) {
  //console.log(activities[i][j])
//}
//

//const SLAPTAS_SKAICIUS = 52;
//let spejimas = parseFloat(prompt('Spekite skaiciu')); 52
//while(spejimas !== SLAPTAS_SKAICIUS) { // false
  //spejimas = parseFloat(prompt('Spekite skaiciu'));
//}


//const todoList = [
  //'Pradeti nuo q komandos', 
  //'panaudoti prompt, kad gauti duomenis', 
  //'panaudoti simbolius ir console atskirti vienai uzduociai nuo kitos'
  //];


//let vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')

//while(vartotojoIvestaKomanda !== 'quit') {
  //if (vartotojoIvestaKomanda === 'list') {
    //vartotojoIvestaKomanda = prompt('Iveskite nauja darba i darbu sarasa')
    //todoList.push(vartotojoIvestaKomanda)
  //} else if ()
  //vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
//}
//white_check_mark
//eyes
//raised_hands
//React
//sReply

//const todoList = ['Pradeti nuo q komandos', 
 // 'panaudoti prompt, kad gauti duomenis', 
  //'panaudoti simbolius ir console atskirti vienai uzduociai nuo kitos'
  //];


//let vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')

//while(vartotojoIvestaKomanda !== 'quit') {
  //if (vartotojoIvestaKomanda === 'new') {
   // let naujasDarbas = prompt('Iveskite nauja darba i darbu sarasa');
    //todoList.push(naujasDarbas);
   // vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
  //} else if (vartotojoIvestaKomanda === 'list') {
   // console.log(`Jusu darbu sarasas:`);
   // for (let i = 0; i < todoList.length; i++) {
     // console.log(`----------------------`);
     // console.log(`${i} - ${todoList[i]}`);
      //console.log(`----------------------`);
    //} 
    //vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
  //} else if (vartotojoIvestaKomanda === 'delete') {
    //let index = parseInt(prompt('Iveskite norimo istrinti darbo numeri'));
    //todoList.splice(index, 1)
    //vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
  //} else {
    //vartotojoIvestaKomanda = 'quit'
    //console.log('Ivesta neteisinga komanda')
  //}
//}

//let komanda 

//function IveskiteKomanda() {
//return komanda = vartotojoIvestaKomanda = prompt('kokia yra jusu sekanti komanda')
//}

//function pakartok(_num 3;, _fraze){
 // for { let i = 0; i<=3; i++; )
  //{console.log(labas)}
//}
//}

//function duSkaiciai(skaicius, laipsnis) {
  //console.log(skaicius ** laipsnis)
//} 

//duSkaiciai(5, 4)

//duSkaiciai(3, 7)

 
//function atiduokDidesni(a, b) {
 // if (a > b) {
 //   console.log(a)
 // } else if (a < b) {
 //   console.log( b)
 // } else {
  //  console.log('skaiciai yra lygus')
  //}
  // console.log(Math.max(a, b))
//}

//atiduokDidesni(8, 9)



//function kokiaTaiDiena(num){
  //if (num === 1) {
    //console.log('Siandien yra pirmadienis');
  //} else if (num === 2) {
   // console.log('Siandien yra antradienis');
  //} else {
  //  console.log('Savaiteje tokios dienos nera')
  //}
//}
//onsole.log(getDay())
// kokiaTaiDiena(8)
// Parasyti funkcija kuri priims dienos numeri 1, 2, ... 7
// ivedus 1 funkcija turetu isspausdinti pirmadienis 
// 2 - antradienis ir t.t.


//Uzduotis susumuoti visus skaicius masyve. 
//const sudetiVisusSkaicius = [12, 4, 16, 3, 8, 9, 'hi', 12, 2, 1, 5, 3, 9, 55, 292, 13, undefined]

//function sudetiVisusMasyvoSkaicius(arr) {
  //let sum = 0;
  //for (let i = 0; i < arr.length; i++) {
    //if(Number.isInteger(arr[i])) {
     // sum = sum + arr[i]
    //}
  //}
  //console.log(sum)
//}

//sudetiVisusMasyvoSkaicius(sudetiVisusSkaicius)

function kartotiniai(startinisSkaicius, galinisSkaicius){
  // const skaiciai = Array.from(Array(100).keys());
  const skaiciai = [];  
  const trijuKartotiniai = [];
  const penkiuKartotiniai = [];
  const trijuIrPenkiuKartotiniai = [];
  for (let i = startinisSkaicius; i <= galinisSkaicius; i++){
    skaiciai.push(i)
  }

  if (15 % 5 == 0) {
    console.log('hi')
  }

  for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 3 === 0 && skaiciai[i] % 5 === 0) {
      trijuIrPenkiuKartotiniai.push(skaiciai[i])
      // trijuKartotiniai.push(skaiciai[i]);
      // penkiuKartotiniai.push(skaiciai[i]);
    } else if (skaiciai[i] % 3 === 0) {
      trijuKartotiniai.push(skaiciai[i]);
    } else if (skaiciai[i] % 5 === 0) {
      penkiuKartotiniai.push(skaiciai[i]);
    } 
  }
  console.log('triju', trijuKartotiniai)
  console.log('penkiu', penkiuKartotiniai)
  console.log('bendri', trijuIrPenkiuKartotiniai)
}
kartotiniai(0, 100)

// uzduotis parasyti funckija kuri startini ir galini skaiciu
// musu atveju naudosime skaicius nuo 0 iki 100
// susikurti masyva su skaiciais nuo 0 iki 100 nerasant viso masyvo ranka
// ties kiekvienu skaiciu, kuris dalinasi is 3 be liekanos
// parasys 'Triju kartotinis
// tas pats su kiekvienu kuris dalinasi is 5
// "Penkiu kartotinis"
// jei skaicius dalinasi is 3 ir is 5 be liekanos 
// 'Koks tai skaicius - triju ir penkiu kartotinis"
// galiausiai i konsole isvesti tris masyvus kuriuose bus
// triju, penkiu bei triju ir penkiu kartotiniai

let str = 'labas';

// split above sentence into array of words, breaking at spaces
let arr = str.split(" ");

// iterate over the array, change the first character to uppercase for each word

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase(0) + arr[i].toUpperCase(4);
}

// join the words to form the string again
str = arr.join(" ");

console.log(str);





