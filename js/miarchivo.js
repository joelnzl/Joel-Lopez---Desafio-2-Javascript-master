
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
  { Name: "Hat", Price: 100,},
  { Name: "Shoes", Price: 300},
  { Name: "Hoodie", Price: 200 },
]

const nameandprice = products.map(product => product.Name+ ":$" + product.Price)

console.log(nameandprice)



const masbarato= products.filter(product => product.Price <= 100)

const productomasbarato = masbarato.map(product => product.Name)

console.log(productomasbarato)


const mascaro= products.filter(product => product.Price >= 300)

const productomascaro = mascaro.map(product => product.Name)

console.log(productomascaro)





