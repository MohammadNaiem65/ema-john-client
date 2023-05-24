let cart = {};

async function showOrderSummery(id) {
	let loadProducts = await fetch("products.json");
	let products = await loadProducts.json();

	const chosenProduct = products.find((product) => product.id === id);
	let quantity = cart[id];
	if (quantity) {
		quantity = quantity + 1;
	} else {
		quantity = 1;
	}
	console.log(chosenProduct, id);
}

export { showOrderSummery };
