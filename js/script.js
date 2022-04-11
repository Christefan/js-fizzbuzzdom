// Stampare numeri da 1 a 100
const rowWrapper = document.querySelector(".row");
// Stampa nella console
for (let i = 1; i <= 100; i++) {

    
    let cont;
    let color;

    if(i % 3 === 0 && i % 5 === 0){// 1. definire i valori che sono sia multipli di 3 che di 5
        cont = "fizzbuzz";
        // document.getElementById("div").style.backgroundColor = "#ffffff";
    } else if (i % 3 === 0) {// 2. definire i valori multipli di 3
        cont = "fizz";
        // document.getElementById("div").style.backgroundColor = "#ffffff";
    } else if(i % 5 === 0){ // 3. definire i valori multipli di 5
        cont = "buzz";
        // const color = document.box;
        // color.style.background = "black";
    }else{
        cont = i;
    }

    // 4. stampare console
    console.log(i, cont);
    // 5. stampare su pagina
    rowWrapper.innerHTML += `<div class="box ${cont}">${cont}</div>`;
}
