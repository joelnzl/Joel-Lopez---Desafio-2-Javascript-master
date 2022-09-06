
const total = document.getElementById('total');
const totaldisc = document.getElementById('totaldisc');
let totalNumber = 0;
const ship = 10;
const discount = 150;
  

function addProduct({ name, price }) {
  totalNumber += price;
  total.textContent = totalNumber + ship;

  if (totalNumber >= 1000)
  totaldisc.textContent = totalNumber + ship - discount ;
 
}




const products = [
  { name: "Hat", price: 100,},
  { name: "Shoes", price: 300},
  { name: "Hoodie", price: 200 },
]

const nameandprice = products.map(product => product.name+ ":$" + product.price)

console.log(nameandprice)



const masbarato= products.filter(product => product.price <= 100)

const productomasbarato = masbarato.map(product => product.name)

console.log(productomasbarato)


const mascaro= products.filter(product => product.price >= 300)

const productomascaro = mascaro.map(product => product.name)

console.log(productomascaro)



let price = document.getElementsByClassName("price");
console.log("Hat " + price[0].innerHTML);
console.log("Shoes " + price[1].innerHTML);
console.log("Hoodie " + price[2].innerHTML);   

