function configureListeners() {
    var images = document.getElementsByTagName('img');  


     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)  
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('reduce')) {
        this.classList.add('reduce')     
}
getProductInfo(event.target.id);
}


function removeOpacity(event) {
    if (this.classList.contains('reduce')) {
        this.classList.remove('reduce')     
}

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            colorName = 'Lime Green'
            price = '$19.99'
            updatePrice(colorName, price)     
            break;           
        case 'pn2':
            colorName = 'Medium Brown'
            price = '$11.14'
            updatePrice(colorName, price)    
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
        
        let color = document.getElementById('color-name');
        color.textContent = colorName
    }
    
}
