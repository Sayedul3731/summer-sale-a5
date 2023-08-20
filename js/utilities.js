function getElementTitleById(titleId){
    const elementValue = document.getElementById(titleId);
    const elementValueTitle = elementValue.innerText;
    return elementValueTitle;
}
function getElementPriceById(elementId){
    const productPrice = document.getElementById(elementId);
    const productPriceString = productPrice.innerText;
    const price = parseFloat(productPriceString);
    return price;
}

function setElementValueById(elementId, newValue){
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = newValue;
}
let count = 0;
function setBuyingProductTitle(buyingId, titleId){
    const cardTitle = getElementTitleById(titleId);
    const buyingProductContainer = document.getElementById(buyingId);
    const li = document.createElement('li');
    li.style.listStyleType = 'none';
    count += 1;
    li.innerHTML = `${count}. ${cardTitle}`;
    buyingProductContainer.appendChild(li);
}