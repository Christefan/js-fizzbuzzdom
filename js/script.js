// Stampare numeri da 1 a 100
// Stampa nella console
for (let i = 0; i <= 100; i++) {

    
    let cont;

    if(i % 3 === 0 && i % 5 === 0){// 1. definire i valori che sono sia multipli di 3 che di 5
        cont = "fizzbuzz";
    } else if (i % 3 === 0) {// 2. definire i valori multipli di 3
        cont = "fizz";
    } else if(i % 5 === 0){ // 3. definire i valori multipli di 5
        cont = "buzz";
    }

    // 4. stampare
    console.log(i, cont);
}
