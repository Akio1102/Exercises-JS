/* Ejercicio 1 */
let moneycofla = parseInt(prompt("Cuanto Dinero tienes Cofla:"));
let moneyRoberto = parseInt(prompt("Cuanto Dinero tienes Roberto:"));
let moneyPedro = parseInt(prompt("Cuanto Dinero tienes Pedro:"));

function iceCream(money, name) {
  if (money >= 0.6 && money < 1) {
    alert(
      `${name} Puedes comprar el helado de agua. Te sobran ${(money -= 0.6).toFixed(
        1
      )}`
    );
  } else if (money >= 1 && money < 1.6) {
    alert(
      `${name} Puedes comprar el helado de crema. Te sobran ${(money -= 1).toFixed(
        1
      )}`
    );
  } else if (money >= 1.6 && money < 1.7) {
    alert(
      `${name} Puedes comprar el helado heladix. Te sobran ${(money -= 1.6).toFixed(
        1
      )} `
    );
  } else if (money >= 1.7 && money < 1.8) {
    alert(
      `${name} Puedes comprar el helado heladovich. Te sobran ${(money -= 1.7).toFixed(
        1
      )}`
    );
  } else if (money >= 1.8 && money < 2.9) {
    alert(
      `${name} Puedes comprar el helado helardo. Te sobran ${(money -= 1.8).toFixed(
        1
      )}`
    );
  } else if (money >= 2.9) {
    alert(
      `${name} Puedes comprar el helado con confites o el Pote de 1/4 kg. Te sobran ${(money -= 2.9).toFixed(
        1
      )}`
    );
  } else {
    alert(`${name} No tienes suficiente Dinero para comprar helados`);
  }
}

iceCream(moneycofla, "Confla");
iceCream(moneyRoberto, "Roberto");
iceCream(moneyPedro, "Pedro");

/* Ejercicio 2 */
function lotery(money,name) {
  alert(`Un sin techo va a comprar boletos de loteria`)
  if (money >= 1 && money < 2) {
    alert(`${name} puedes comprar 1 boletos y le sobra ${money -= 1}`);
  } else if(money >= 2 && money < 3) {
    alert(`${name} puedes comprar 2 boletos y le sobra ${money -= 2}`);   
  }else if(money >= 3){
    alert(`${name} puedes comprar 3 boletos y le sobra ${money -= 3}`);
  }
}

lotery(moneycofla,"x");

/* Ejercicio 3 */
function detector(lies,suspicious) {
  lies = lies.toLowerCase();
  if (lies === "no miente") {
    alert(`${suspicious} no es acusado de mentir`)
  } else if(lies === "miente"){
    alert(`${suspicious} es acusado de mentir`)    
  }else{
    alert(`${suspicious} no se decide si es sospechoso`)
  }
}

detector("No MIENTE", "A")