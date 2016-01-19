#ScriptEd Burgers

ScriptEd Burgers is a quick fun HTML application that lets you create your own ingredients in CSS and build a burger on your page. 

ScriptEd Burgers uses Arrays and a while loop, along with a some dom manipulation to make tasty burgers. 

Read up about **arrays** here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Read all about **while loops** here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while


#Getting Started
1. Go to https://github.com/paulgasbarra/burger_fun and click on the "Fork" button to fork the starter code
2. In Cloud9 (https://c9.io), go to your Dashboard, then select Repositories, then find burger_fun. Click "clone to edit" to create a new workspace for the starter code
3. You'll be editing 3 files: index.html, script.js, and styles.css

#scripts.js
1. Check the css for available ingredients

2. Create an array with the ingredients in the order you want them to be stacked.

3. Build a function called **buildBurger** that takes an array called ingredients as its parameters. 

4. buildBurger should use a while loop to go through the list of ingredients and add each one to the index.html
* Each loop will add a div with a different class name to the DOM, using the following lines of code. 

	var div = "<div class='" + ??? +"'></div>";
	document.body.innerHTML += div;

* You will need to figure out what the **???*** is. You will need to access the index of the array you created. 
* Be sure to increment an index counter.

5. Call the buildBurger function inside this code snippit: 
	window.onload = function (){
	


	};

##Bonus: Create your own ingredients! Improve the look of others. [CSS]

##Bonus: Set a maximum number of ingredients. Alert chef if max number is exceeded. [Conditional]

##Bonus: Total the price of the burger. Each ingredient is $0.50. Display the price on the page. [Arithmetic and DOM Manipulation] 

##Bonus: Create a couple of different burgers with a different array of ingredients. Can you build a plain burger, an open face burger, a bacon cheese burger? [Arrays]

Have fun and happy hamburgering!

