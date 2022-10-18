const total = document.getElementById("total");
const totaldisc = document.getElementById("totaldisc");
let totalNumber = 0;
const ship = 10;
const cartProducts = [];
document.getElementById("jsonBtn").addEventListener("click", loadJSON);
const cart = document.querySelector(".cart");
const cartList = document.getElementById("cartlist");

const listCollapse = document.getElementById("listCollapse");
function loadJSON() {
  fetch("misproductos.json")
    .then(function (res) {
      return res.json();
    })

    .then(function (data) {
      let html = "";
      data.forEach(function (products) {
        html += `
          <li>${products.name} ${products.price}</li>
        `;
      });

      listCollapse.innerHTML = html;
    });
}

let listItemCounter = 0;
function addProduct({ name, price }) {
  totalNumber += price;
  total.textContent = totalNumber;

  // OP TERNARIO
  total.textContent <= 1000
    ? Swal.fire({
        text: "The product has been added to the order",
        icon: "success",
        confirmButtonText: "Continue shopping",
      })
    : Swal.fire({
        text: "A $150 discount has been applied to your purchase",
        icon: "info",
        confirmButtonText: "Continue shopping",
      });

  cartProducts.push({ name, price });

  listItemCounter++;

  if (totalNumber > 0) {
    cart.style.display = "block";

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${name} - ${price} - `));
    li.id = `${listItemCounter}-li`;

    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.addEventListener("click", deleteItem);
    deleteButton.id = listItemCounter;
    deleteButton.className = "btn btn-danger";
    li.appendChild(deleteButton);

    cartList.appendChild(li);
  }
}

function deleteItem(event) {
  const elementId = event.target.id;
  const element = document.getElementById(`${elementId}-li`);

  const price = Number(element.textContent.split("-")[1]);

  totalNumber -= price;

  total.textContent = totalNumber;

  element.remove();

  if (totalNumber === 0) {
    cart.style.display = "none";
  }
}

const products = [
  { name: "Hat", price: 100 },
  { name: "Shoes", price: 300 },
  { name: "Hoodie", price: 200 },
];

// DESESTRUCTURACION y SPREAD
products.map(({ name, price }) => name + ":$" + price);

// console.log(...products)

const masbarato = products.filter((product) => product.price <= 100);

const productomasbarato = masbarato.map((product) => product.name);

// console.log(productomasbarato);

const mascaro = products.filter((product) => product.price >= 300);

const productomascaro = mascaro.map((product) => product.name);

// console.log(productomascaro);

let price = document.getElementsByClassName("price");
// console.log("Hat " + price[0].innerHTML);
// console.log("Shoes " + price[1].innerHTML);
// console.log("Hoodie " + price[2].innerHTML);

//EVENTO

function comprarproductos() {}
var buy = function () {
  Swal.fire({
    title: "Your order was taken succesfuly",
    icon: "success",
    confirmButtonText: "Continue shopping",
  });
};

var botoncompra = document.getElementById("buying");
botoncompra.addEventListener("click", buy);
