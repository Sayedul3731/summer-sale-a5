function getElementTitleById(titleId) {
    const elementValue = document.getElementById(titleId);
    const elementValueTitle = elementValue.innerText;
    return elementValueTitle;
}
function getElementPriceById(elementId) {
    const productPrice = document.getElementById(elementId);
    const productPriceString = productPrice.innerText;
    const price = parseFloat(productPriceString);
    return price;
}


document.getElementById('apply-btn').addEventListener('click',function(){
    const totalPrice = getElementPriceById('total-price');
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = '';
    if( inputFieldValue === 'SELL200'){
        const discountAmount = totalPrice * (20/100);
        const total = totalPrice - discountAmount;
        const totalAmount = total.toFixed(2);
        const totalDiscountAmount = discountAmount.toFixed(2);
        setElementValueById('discount-amount',totalDiscountAmount)
        setElementValueById('total-amount', totalAmount);
    }else{
        alert('wrong coupon code!!!');
    }
});

function setElementValueById(elementId, newValue) {
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = newValue;
    if(newValue > 0){
        document.getElementById('purchase-btn').removeAttribute('disabled')
    }
    if(newValue >= 200){
        document.getElementById('apply-btn').removeAttribute('disabled')
    }
}
let count = 0;
function setBuyingProductTitle(buyingId, titleId) {
    const cardTitle = getElementTitleById(titleId);
    const buyingProductContainer = document.getElementById(buyingId);
    const li = document.createElement('li');
    li.style.listStyleType = 'none';
    count += 1;
    li.innerHTML = `${count}. ${cardTitle}`;
    buyingProductContainer.appendChild(li);
}