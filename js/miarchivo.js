
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








