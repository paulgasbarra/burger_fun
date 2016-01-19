function buildBurger(ingredients){
  var i=0;
  
  while(i<ingredients.length) {
    var div = "<div class='" + ingredients[i]+"'></div>";
    document.body.innerHTML += div;
    i++; 
  }
} // end buildBurger

// Our ingredient array
var some_ingredients = ["topBun", "cheese", "kittens", "bacon", "beefPatty", "bottomBun"]; 

// Now call our function, with that ingredients array
window.onload = function (){
buildBurger(some_ingredients);
};