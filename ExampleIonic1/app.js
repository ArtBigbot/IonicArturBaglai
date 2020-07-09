const inputProduct = document.querySelector('#input-product');
const inputPrice = document.querySelector('#input-price');
const inputAmount = document.querySelector('#input-amount');
const buttonClear = document.querySelector('#btn-clear');
const buttonAdd = document.querySelector('#btn-add');
const listCart = document.querySelector('#list-cart');
const controller = document.querySelector('ion-alert-controller');
const totalPrice = document.querySelector('#totalPrice');

buttonAdd.addEventListener('click',addEventListener);
var totalPriceForEachProduct = []; 

const clear = () => {
    inputProduct.value = '';
    inputPrice.value = '';
    inputAmount.value ='';
    totalPrice.value = '';

   
};
buttonAdd.addEventListener('click', () => {
  
    const enteredProduct = inputProduct.value;
    const enteredPrice = inputPrice.value;
    const enteredAmount = inputAmount.value;
    if (
        enteredProduct.trim().length <= 0 ||
        enteredPrice <= 0 ||
        enteredPrice.trim().length <= 0||
        enteredAmount >10 ||
        enteredAmount <=0 ||
        enteredAmount.trim().length <= 0 

    )
        

        return presentAlert(enteredProduct, enteredPrice, enteredAmount);
      var multiply =  enteredPrice * enteredAmount;
      totalPriceForEachProduct.push(multiply);

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredProduct + ': ' + enteredPrice + ' \u20ac'+' x '+ enteredAmount + ' = '+ multiply;
    listCart.appendChild(newItem);
    

    
  
    var total = 0;
    for(var i = 0 ; i< totalPriceForEachProduct.length;i++){

        total += totalPriceForEachProduct[i];
    }
 
   
    totalPrice.append(total);
    clear();
  
    
});
buttonClear.addEventListener('click', () => {
    clear();
    listCart.removeChild(newItem);
});


  function presentAlert(enteredProduct, enteredPrice, enteredAmount ) {

    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
  
   debugger;
   if (
    enteredProduct.trim().length == 0 &&
    enteredPrice.trim().length == 0 &&
    enteredPrice.trim().length == 0 &&
    enteredAmount.trim().length ==0
    )
    {
        alert.message = 'Fill all fields';
    } else{
        if(enteredAmount >10 ){
            alert.message = 'Amount can not be more than 10';
        }else if (enteredAmount.trim().length <=0){
            alert.message = 'Enter amount';
        }

        
         if(enteredProduct.trim().length <= 0){
            alert.message = 'Enter product name';
        } 
         if(enteredPrice <=0){
            alert.message = 'Enter correct price';
        }
    }

    

    
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  }