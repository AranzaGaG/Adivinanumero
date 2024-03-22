const changeNumberInDom = (numero) => {
  if (confirm("Quieres otro número?")) {
    txt = "You pressed OK!";
    return true;
  } else {
    document.getElementById("message").textContent =
      "Excelente, tu numero fue el " + numero;
    return false;
  }
};
let numero = Math.round(Math.random() * 100);

alert("Piensa en un número, listo?");

do {
  numero = Math.round(Math.random() * 100);
  alert("Tú número es " + numero);
} while (changeNumberInDom(numero));
