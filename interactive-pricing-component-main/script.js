let switchValue = document.getElementById("switch-shadow");
let slider = document.getElementById("myRange");

let outputPrice = document.getElementById("demo");
let outputViews = document.getElementById("pageviews");

let sliderValue = parseInt(slider.value)
let viewsPrice = definePrice(sliderValue)
let views = viewsPrice [0]
let price = viewsPrice [1]

 
  sliderValue = parseInt(slider.value)


outputPrice.innerHTML =  '$ '  + price.toFixed(2);
outputViews.innerHTML = views;
 
let priceText = '$ '  + price.toFixed(2);
let viewsText = views;
 
 
slider.oninput = 

function () {
  sliderValue = parseInt(slider.value)

  if (switchValue.checked == true){   
    
    
    viewsPrice = definePrice(sliderValue)
    views = viewsPrice [0]
    price = viewsPrice [1]
    
    let discount = (price   * 25/100);
    price = price - discount;
    priceText = '$ '  + price.toFixed(2);
    outputViews.innerHTML = views;
    outputPrice.innerHTML = priceText;
  }
  else {
     
   
    viewsPrice = definePrice(sliderValue)
    views = viewsPrice [0]
    price = viewsPrice [1]
    priceText = '$ '  + price.toFixed(2); 
    outputViews.innerHTML = views;
    outputPrice.innerHTML = priceText ;
  }
  
}
function definePrice(sliderValue){
  var views 
  var price
 
  switch(sliderValue) {
    
    case 1:
      views = 10 + "K PAGEVIEWS";
     
      price = 8.00;
      break;
    case 2:
      views = 50 + "K PAGEVIEWS";
      price = 12.00;
      break;
    case 3:
      views =  100 + "K PAGEVIEWS";
      price = 16.00;
      break;
    case 4:
      views = 500 + "K PAGEVIEWS";
      price = 24.00;
      break;
    case 5:
      views = 1 + "M PAGEVIEWS";
      price = 36.00;
      break;
    default:
      console.log(sliderValue);
      // code block
    } 
    return [views, price];
    

}



 
switchValue.onchange =   function () {
  sliderValue = parseInt(slider.value)
  if (switchValue.checked == true){
    
   
    viewsPrice = definePrice(sliderValue)
    views = viewsPrice [0]
    price = viewsPrice [1]
    
    let discount = (price   * 25/100);
    price = price - discount;
    priceText = '$ '  + price.toFixed(2);
    outputViews.innerHTML = views;
    outputPrice.innerHTML = priceText;
  }
  else {
    viewsPrice = definePrice(sliderValue)
    views = viewsPrice [0]
    price = viewsPrice [1]
    priceText = '$ '  + price.toFixed(2); 
    outputViews.innerHTML = views;
    outputPrice.innerHTML = priceText ;
  }
}

