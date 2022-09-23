
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

  

  // OP TERNARIO
  total.textContent <= 1000 ? Swal.fire({
    text: "The product has been added to the order",
    icon: 'success',
    confirmButtonText: 'Continue shopping'
})
:  Swal.fire({
  text: 'A $150 discount has been applied to your purchase',
  icon: 'info',
  confirmButtonText: 'Continue shopping'
})

}





const products = [
  { name: "Hat", price: 100,},
  { name: "Shoes", price: 300},
  { name: "Hoodie", price: 200 },
]

// DESESTRUCTURACION y SPREAD
products.map(({ name, price}) => name + ':$' + price)

console.log(...products)



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



//EVENTO

  function comprarproductos(){}
  var buy = function(){
    Swal.fire({
      title: 'Your order was taken succesfuly',
      icon: 'success',
      confirmButtonText: 'Continue shopping'
    })
    

  };

  var botoncompra = document.getElementById('buying');
  botoncompra.addEventListener('click', buy);
  



