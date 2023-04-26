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
