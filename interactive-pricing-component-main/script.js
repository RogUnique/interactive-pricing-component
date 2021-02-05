let switchValue = document.getElementById("switch-shadow");
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let outputViews = document.getElementById("pageviews");
let oneThousandsViews = 6.25;
output.innerHTML = slider.value;
outputViews.innerHTML = 116 - slider.value;

 
slider.oninput = function() {
  output.innerHTML = this.value;
  if (switchValue.checked == true){
    let discount = 25/100;
    let price = oneThousandsViews * this.value ;
    price=   (this.value *  discount);
    outputViews.innerHTML = price;
  }
  else {
    let price = oneThousandsViews * this.value ;
    outputViews.innerHTML = price;
  }
  
}
 
