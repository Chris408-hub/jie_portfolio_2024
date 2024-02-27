(function(){
	"use strict";
	
	console.log("fired");

	let button = document.querySelector('#button');
	let burgerCon = document.querySelector('#burger-con');
	// let productCon = document.querySelectorAll('.product');
	let galleryImage = document.querySelectorAll('.flavor');
	// let changeImage = document.querySelectorAll('.fruit');
	// let productInfo = document.querySelectorAll('#product-info');

	// let secondImage = document.querySelector('.product img:nth-of-type(2)');

	let fruitJuices = {
	orange: {
		name: 'Orange Fruit Juice',
		ingredients: ['Fresh oranges', 'water', 'sugar'],
		price: '$2.99 per bottle (250ml)',
		// nutrition: 'Calories - 47 kcal, Total Fat - 0g, Sodium - 1mg, Total Carbohydrates - 12g, Sugars - 10g, Protein - 0g, Vitamin C - 72% daily value',
		flavor: 'Sweet and citrusy, with a tangy and refreshing taste.'

		},
		
	kiwi: {
		name: 'Kiwi Fruit Juice',
		ingredients: ['Fresh kiwi fruit, water, sugar'],
		price: '$2.99 per bottle (250ml)',
		// nutrition: 'Calories - 70 kcal, Total Fat - 0g, Sodium - 10mg, Total Carbohydrates - 17g, Sugars - 16g, Protein - 0g, Vitamin C - 50% daily value',
		flavor: 'Refreshing and tangy, with a sweet and slightly sour taste.'
		},
	
	strawberry: {
		name: 'Strawberry Fruit Juice',
		ingredients: ['Fresh strawberries', 'water', 'sugar'],
		price: '$2.99 per bottle (250ml)',
		// nutrition: 'Calories - 60 kcal, Total Fat - 0g, Sodium - 5mg, Total Carbohydrates - 14g, Sugars - 12g, Protein - 0g, Vitamin C - 40% daily value',
		flavor: 'Sweet and fruity, with a slightly tart and refreshing taste.'
	}
	};

//   suggestions: 'Enjoy chilled on its own or mix with sparkling water for a refreshing spritzer.',
//   price: '$2.99 per bottle (250ml)',
//   features: 'Made from locally-sourced fresh kiwi fruit, no preservatives or artificial colors added.'
	
function showIntro() {
  const juiceName = this.dataset.juice;
  const juice = fruitJuices[juiceName];
  const keys = Object.keys(juice);

  const productDiv = this.closest('.product');
  const list = productDiv.querySelector('ul');
	


  if (list) {
	list.remove(); 
    return;
  }

  const newList = document.createElement('ul');
  productDiv.appendChild(newList);

  for (let i = 0; i < keys.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `${keys[i]}: ${juice[keys[i]]}`;
	newList.appendChild(listItem);
  }
	
}

	
galleryImage.forEach(product => product.addEventListener('mouseover', showIntro));



// 	function showIntro() {

// 		let product1 = {
// 	name = "orange juice"
// }



		//make sure function is firing
		// console.log("changeBcg fired");
		// figure out what this is referrring to
		// console.log(this);
		// lets get a list of the child nodes and see what slots e.g.[] are storing what
		// console.log(this.childNodes);
		// now that we have the nodelist lets do stuff with it
		// this.childNodes[7].classList.toggle("hidden");
		// this.childNodes[3].classList.toggle("hidden");
		// this.childNodes[1].style.display="none";
		// this.childNodes[3].style.display="block";
	// }

		// productCon.forEach(product => product.addEventListener("click", showIntro));

	function hamburgerMenu() {
		burgerCon.classList.toggle('slide-toggle');
		button.classList.toggle('expanded');
	};

	button.addEventListener('click', hamburgerMenu, false);

	
		

})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/

