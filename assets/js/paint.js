function configureListeners() {
    let images =  document.getElementsByTagName("img")// select img elements  


     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
        // iterate over images and add mouseover event listeners      
    } 

}


function addOpacity(event) {
    if (!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    // add appropriate CSS class
    getProductInfo(event.target);   
}

function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim')
    }

     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

//using target to grab the target element
function getProductInfo(target) {  // select img elements  


   let colorPrice =  document.getElementById('color-price');
   //setting the color-price with the data price
   colorPrice.textContent = target.getAttribute('data-price')

    let colorName = document.getElementById('color-name');

//setting the color-name with the alt tag
    colorName.textContent = target.getAttribute('alt');
}
// function getProductInfo(price, colorName) {
//     let price = document.getElementByTagName('img')[0].dataPrice;
//     let colorName;  
    
    // switch (paintColor) {


//         case 'pn1':    
//             // set variables for price and color name and invoke a function to update the price     
//             break;           
//         case 'pn2':
//             // set variables for price and color name and invoke a function to update the price    
//             break;            
//         case 'pn3':
//             // set variables for price and color name and invoke a function to update the price  
//             break;   
//         case 'pn4':
//             // set variables for price and color name and invoke a function to update the price  
//             break;   
//         case 'pn5':
//             // set variables for price and color name and invoke a function to update the price       
//             break;   
//         case 'pn6':
//             // set variables for price and color name and invoke a function to update the price        
//             break;   
//         case 'pn7':
//             // set variables for price and color name and invoke a function to update the price 
//             break;   
//         case 'pn8':
//             // set variables for price and color name and invoke a function to update the price   
//             break;   
//         case 'pn9':
//             // set variables for price and color name and invoke a function to update the price 
//             break;   
//           default:              
    // }

    // function updatePrice(colorName, price)
    // {       
    //     let colorPrice = document.getElementById('color-price');
    //     colorPrice.textContent = price;
        
    //     let color = document.getElementById('color-name');
    //     color.textContent = colorName;
    // }
    
