	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		LactoseIntolerant: true,
		NutAllergies: true,
		Lactose_Intolerant_and_Nut_Allergies: true,
		price: 5.00
	},

	{
		name: "Apples",
		LactoseIntolerant: true,
		NutAllergies: true,
		Lactose_Intolerant_and_Nut_Allergies: true,
		price: 1.35
	},

	{
		name: "Cucumbers",
		LactoseIntolerant: true,
		NutAllergies: true,
		Lactose_Intolerant_and_Nut_Allergies: true,
		price: 3.75
	},

	{
		name: "Bread",
		LactoseIntolerant: true,
		NutAllergies: false,
		Lactose_Intolerant_and_Nut_Allergies: false,
		price: 2.35
	},

	{
		name: "Nut chocolate bar",
		LactoseIntolerant: false,
		NutAllergies: false,
		Lactose_Intolerant_and_Nut_Allergies: false,
		price: 4.50
	},

	{
		name: "Milk",
		LactoseIntolerant: false,
		NutAllergies: true,
		Lactose_Intolerant_and_Nut_Allergies: false,
		price: 4.50
	},

	{
		name: "Salmon",
		LactoseIntolerant: false,
		NutAllergies: true,
		Lactose_Intolerant_and_Nut_Allergies: false,
		price: 10.00
	},

	{
		name: "Strawberry",
		LactoseIntolerant: true,
		NutAllergies: true,
		Lactose_Intolerant_and_Nut_Allergies: true,
		price: 3.90
	},

	{
		name: "Almond Ice cream",
		LactoseIntolerant: true,
		NutAllergies: false,
		Lactose_Intolerant_and_Nut_Allergies:false,
		price: 3.00
	}, 

	{
		name: "Grapes",
		LactoseIntolerant: true,
		NutAllergies: true,
		Lactose_Intolerant_and_Nut_Allergies:true,
		price: 10.00
	},

	// Organic Products

	{
		name: "Organic Grapes",
		Lactose_Intolerant_Organic: true,
		Nut_Allergy_Organic: true,
		LactoseIntolerant_and_NutAllergies_Organic:true,
		price: 9.00
	},

	{
		name: "Organic Brocoli",
		Lactose_Intolerant_Organic: true,
		Nut_Allergy_Organic: true,
		LactoseIntolerant_and_NutAllergies_Organic:true,
		price: 6.00
	},

	{
		name: "Organic Apples",
		Lactose_Intolerant_Organic: true,
		Nut_Allergy_Organic: true,
		LactoseIntolerant_and_NutAllergies_Organic:true,
		price: 2.35
	},

	{
		name: "Organic Cucumbers",
		Lactose_Intolerant_Organic: true,
		Nut_Allergy_Organic: true,
		LactoseIntolerant_and_NutAllergies_Organic:true,
		price: 4.75
	}, 

	{
		name: "Organic Milk",
		Lactose_Intolerant_Organic: false,
		Nut_Allergy_Organic: true,
		LactoseIntolerant_and_NutAllergies_Organic:false,
		price: 6.50
	},

	{
		name: "Organic Strawberry",
		Lactose_Intolerant_Organic: true,
		Nut_Allergy_Organic: true,
		LactoseIntolerant_and_NutAllergies_Organic:true,
		price: 4.90
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

		else if ((restriction == "Lactose_Intolerant_and_Nut_Allergies") && (prods[i].Lactose_Intolerant_and_Nut_Allergies == true)){
			product_names.push(prods[i]);		
		}

		else if ((restriction == "Lactose_Intolerant_Organic") && (prods[i].Lactose_Intolerant_Organic == true)){
			product_names.push(prods[i]);		
		}

		else if ((restriction == "Nut_Allergy_Organic") && (prods[i].Nut_Allergy_Organic == true)){
			product_names.push(prods[i]);		
		}

		else if ((restriction == "LactoseIntolerant_and_NutAllergies_Organic") && (prods[i].LactoseIntolerant_and_NutAllergies_Organic == true)){
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

