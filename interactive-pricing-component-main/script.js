let switchValue = document.getElementById("switch-shadow");
let slider = document.getElementById("myRange");

let outputPrice = document.getElementById("demo");
let outputViews = document.getElementById("pageviews");

let oneThousandsViewsPrice = 6.25;


let price = slider.value
let views = oneThousandsViewsPrice  * price ;

outputPrice.innerHTML =  "$ " + price   ;
outputViews.innerHTML = 116.00   - price  ;
 
let priceText = '$ '  + price  ;
let viewsText = views + "K PAGEVIEWS";
 
 
slider.oninput = 

function () {
 
  if (switchValue.checked == true){   
    
    price = this.value;
    views = oneThousandsViewsPrice  * price ;
    let discount = (price   * 25/100);
    price = price - discount;
    priceText = '$ '  + price ;
    viewsText = views + "K PAGEVIEWS" ;

    outputViews.innerHTML = viewsText;
    outputPrice.innerHTML = priceText ;
  }
  else {
     
    price = this.value ;
    views = oneThousandsViewsPrice  * price ;
    priceText = '$ '  + price ;
    viewsText = views + "K PAGEVIEWS"


    outputViews.innerHTML = viewsText;
    outputPrice.innerHTML = priceText ;
  }
  
}
 
switchValue.onchange =   function () {
  if (switchValue.checked == true){
    let discount = (slider.value  * 25/100);
    let price = slider.value - discount;
    outputPrice.innerHTML = price ;
  }
  else {
     
    let price = slider.value;
    outputPrice.innerHTML = price ;
  }
}