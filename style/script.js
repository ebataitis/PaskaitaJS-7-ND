console.log('Objektai');
//// objektu savybes - properties
///  metodai - methods
//            obj = {
//            id = 2,
//              value = 'text',
//              .......... ,
//}


const studentas = {
    name: 'John',
    age: 22, // properties
    sayName: function () { /// ES5
        console.log(this.name); /// method   
    },
    getAge() { /// ES6
        console.log(this.age);
    },
    mother: {
        name: 'Carol',
        age: 56,
    },
    mathScores: [10, 5, 8, 6, 6, 9, 5, 10, 8],
    getAvgScore() {
        sum = 0;
        for (i = 0; i < this.mathScores.length; i++) {
            sum += this.mathScores[i];
        }
        const avg = sum / this.mathScores.length;
        console.log('Vidurkis', avg.toFixed(1));
    }
}


studentas.sayName();
studentas.getAge();
console.log(studentas.mother.name);
console.log('pirmas pazimys:', studentas.mathScores[0]);
studentas.getAvgScore();

///   ciklas forEach()

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//numbers.forEach(function(skaicius){
//    console.log(skaicius);
//});
//numbers.forEach(function(number, i){        // i - indexas
//    console.log(number, i);          
//});

//var x = function (){
//    return 2;           ES5
//};
//
//var y = ()=>{
//    return 2;           ES6
//};
//numbers.forEach((number)=>{
//    console.log(number);
//});
//numbers.forEach(number=>{
//    return console.log(number);
//})

numbers.forEach(number => console.log(number));
// jei return tik viena kodo eilute ir vienas argumentas

var sum = 0;
numbers.forEach(number => sum += number);
console.log('Suma ', sum);

// map, filter, reduce..
// map - grazina masyva su tiek pat pakeistu nariu

//const numsX2 = numbers.map((number)=>{
//    return number*2;
//})

const numsX2 = numbers.map(number => number * 2);

// filter grazins modifikuota masyvo ilgi
// lyginiai masyvo numbers nariai
const evenNums = numbers.filter(item => item % 2 == 0);

/// reduce - grazina tik viena verte is viso masyvo


var suma = numbers.reduce((total, item) => {
    return total += item;
}, 0);

var newSum = numbers.reduce((total, item) => total += item, 0);


var persons = [{
        name: 'Petras',
        age: 28
    },
    {
        name: 'Jonas',
        age: 35
    },
    {
        name: 'Antanas',
        age: 17
    },
    {
        name: 'Agne',
        age: 21
               },
    {
        name: 'Juste',
        age: 13
               }
              ];

const underAge = persons.filter(person => person.age < 18);
console.log(underAge);
underAge.forEach(person => console.log('Neparduosim alaus ', person.name));
// papildoma property

persons[0].adult = true;

//#1  persons.. Grazinti nauja masyva su tu zmoniu gimimo datom
//#2  sukurti nauja masyva prekes(8). Prekes masyvo nariai turi
//    objektai su siomis savybemis:
//    name, price, id, weight, galiojimo data,
//    tipas(ang. balt, riebalai)
//#3  Surasti bendra prekiu kainu suma
//#4  Surasti visas pasenusias prekes
//#5  Kaina didesne uz vidurki :)
//#5  Isrusiuoti prekes ir sudeti i atskirus masyvus pagal tipa

const birthDay = persons.map(person => 2017 - person.age);
console.log(birthDay);

console.warn('NAMU DARBAS');
const prekes = [{
    name: 'pienas',
    price: 1.5,
    id: 01,
    weight: 1,
    expire: 1031,
    type: 'baltymai'
}, {
    name: 'miltai',
    price: 2,
    id: 02,
    weight: 2,
    expire: 1215,
    type: 'angliavandeniai'
}, {
    name: 'kava',
    price: 3,
    id: 03,
    weight: 0.5,
    expire: 1225,
    type: 'bakaleja'
}, {
    name: 'aliejus',
    price: 2.5,
    id: 04,
    weight: 1,
    expire: 1231,
    type: 'riebalai'
}, {
    name: 'kecupas',
    price: 2.5,
    id: 05,
    weight: 0.8,
    expire: 1118,
    type: 'angliavandeniai'
}, {
    name: 'varske',
    price: 1.2,
    id: 06,
    weight: 0.5,
    expire: 1025,
    type: 'baltymai'
}, {
    name: 'makaronai',
    price: 1.3,
    id: 07,
    weight: 1,
    expire: 1315,
    type: 'angliavandeniai'
}, {
    name: 'sonine',
    price: 4,
    id: 08,
    weight: 1,
    expire: 1115,
    type: 'riebalai'
}];
//kainu suma
var priceSum = prekes.reduce((allSum, preke)=>allSum+=preke.price,0);
console.log('Prekiu kainu suma ',priceSum, 'EUR.');
//pasibaiges galiojimas
var endExpire = prekes.filter(preke=>preke.expire-1106<0);
endExpire.forEach(preke=>console.log('Baige galioti ',preke.name));
//vidutine kaina
var avgPrice = priceSum/prekes.length;
console.log('vidutine kaina ', avgPrice,'EUR');
//kaina didesne nei nei vidutine
var bigerWhenAvg = prekes.filter(preke=>preke.price>avgPrice);
bigerWhenAvg.forEach(preke=>console.log('Brangesne nei vid: ',preke.name, 'kaina',preke.price, 'EUR'));
//pagal tipa
var baltymai = prekes.filter(preke=>preke.type=='baltymai');
console.warn('Baltymai:');
baltymai.forEach(preke=>console.log(preke.name));
console.warn('Angliavandeniai:');
var angliavandeniai = prekes.filter(preke=>preke.type=='angliavandeniai');
angliavandeniai.forEach(preke=>console.log(preke.name));
console.warn('Riebalai:');
var riebalai = prekes.filter(preke=>preke.type=='riebalai');
riebalai.forEach(preke=>console.log(preke.name));
console.warn('Bakaleja:');
var bakaleja = prekes.filter(preke=>preke.type=='bakaleja');
bakaleja.forEach(preke=>console.log(preke.name));
//prideti property
endExpire.forEach(preke=>preke.pirkti='NEPIRKTI!');
console.log(endExpire);