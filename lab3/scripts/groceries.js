	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		LactoseIntolerant: true,
		NutAllergies: true,
		Organic: false,
		Vegetarian: true,
		price: 5.00
		
	},

	{
		name: "Apples",
		LactoseIntolerant: true,
		NutAllergies: true,
		Organic:false,
		Vegetarian: true,
		price: 1.35
		
	},

	{
		name: "Cucumbers",
		LactoseIntolerant: true,
		NutAllergies: true,
		Organic:false,
		Vegetarian: true,
		price: 3.75
		
	},

	{
		name: "Bread",
		LactoseIntolerant: true,
		NutAllergies: false,
		Organic:false,
		Vegetarian: true,
		price: 2.35
	},

	{
		name: "Meat",
		LactoseIntolerant: true,
		NutAllergies: true,
		Organic:false,
		Vegetarian: false,
		price: 4.50
	},

	{
		name: "Milk",
		LactoseIntolerant: false,
		NutAllergies: true,
		Organic:false,
		Vegetarian: true,
		price: 4.50
	},

	{
		name: "Salmon",
		LactoseIntolerant: false,
		NutAllergies: true,
		Organic:false,
		Vegetarian: true,
		price: 10.00
	},

	{
		name: "Strawberry",
		LactoseIntolerant: true,
		NutAllergies: true,
		Organic:false,
		Vegetarian: true,
		price: 3.90
	},

	{
		name: "Almond Ice cream",
		LactoseIntolerant: true,
		NutAllergies: false,
		Organic:false,
		Vegetarian: true,
		price: 3.00
	}, 

	{
		name: "Grapes",
		LactoseIntolerant: true,
		NutAllergies: true,
		Organic:false,
		Vegetarian: true,
		price: 10.00
	},

	// Organic Products

	{
		name: "Organic Grapes",
		LactoseIntolerant: true,
		NutAllergies: true,
		Organic:true,
		Vegetarian: true,
		price: 9.00
	},

	{
		name: "Organic Brocoli",
		LactoseIntolerant: true,
		NutAllergies: true,
		Organic:true,
		Vegetarian: true,
		price: 6.00
	},

	{
		name: "Organic Apples",
		LactoseIntolerant: true,
		NutAllergies: true,
		Organic:true,
		Vegetarian: true,
		price: 2.35
	},

	{
		name: "Organic Cucumbers",
		LactoseIntolerant: true,
		NutAllergies: true,
		Organic:true,
		Vegetarian: true,
		price: 4.75
	}

];



var sortedproducts=products.sort((firstEl, secondEl) => { 

	if (firstEl.price > secondEl.price){

		return 1; 
	}
	else {

		return -1;
	}

} )


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseIntolerant") && (prods[i].LactoseIntolerant == true)){
			product_names.push(prods[i]);			
		}
		else if ((restriction == "NutAllergies") && (prods[i].NutAllergies == true)){
			product_names.push(prods[i]);		
		}

		else if ((restriction == "Vegetarian") && (prods[i].Vegetarian == true)){
			product_names.push(prods[i]);		
		}

		else if ((restriction == "Organic") && (prods[i].Organic == true)){
			product_names.push(prods[i]);		
		}

		else if (restriction == "None"){
			product_names.push(prods[i]);		
		}

	}
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;

	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

