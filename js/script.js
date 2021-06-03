// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e per i multipli di 5 stampi "Buzz". Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".


// stampo i numeri da uno a 100

var numeri = [];
for (var i = 1; i <= 100; i++){
    numeri.push(i);
}

for (i = 0; i < numeri.length; i++){
    if (numeri[i] % 3 == 0 && numeri[i] % 5 == 0 && numeri[i] % 6 == 0){
        numeri[i] += " " + "FizzBuzzBoolean";
    } else if (numeri[i] % 3 == 0 && numeri[i] % 5 == 0){
      numeri[i] += " " + "FizzBuzz";
    } else if (numeri[i] % 3 == 0 && numeri[i] % 6 == 0){
        numeri[i] += " " + "FizzBoolean";
    } else if (numeri[i] % 3 == 0 ){
    numeri[i] += " " + "Fizz";
    } else if (numeri[i] % 5 == 0){
    numeri[i] += " " + "Buzz";
    }
  document.getElementById("stampa").innerHTML += numeri[i] + "</br>";
}

console.log(numeri);


// Se il numero è anche divisibile per 6, aggiungiamo "Boolean".
// 6 diventerà quindi FizzBoolean,
// 30 diventerà FizzBuzzBoolean