function getProducts() {
	let products;
	fetch("products.json")
		.then((res) => res.json())
		.then((data) => console.log(data));
}

function getStoredCart() {
	let storedCart = {};
	const storedCartStringified = localStorage.getItem("cart");
	if (storedCartStringified) {
		storedCart = JSON.parse(storedCartStringified);
	}
	return storedCart;
}

export { getProducts, getStoredCart };
