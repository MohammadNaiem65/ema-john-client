import React, { useEffect, useState } from "react";
import OrderSummery from "../OrderSummery/OrderSummery";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import { getStoredCart } from "../../utilities/commonFuns";

const Shop = () => {
	const products = useLoaderData();
	const [cart, setCart] = useState([]);

	// load initial cart data
	useEffect(() => {
		let tempCart = [];
		const storedCart = getStoredCart();
		for (const id in storedCart) {
			let product = products.find((product) => product.id === id);
			product.quantity = storedCart[id];
			tempCart.push(product);
		}
		setCart(tempCart);
	}, [products]);

	const handleCart = (id) => {
		let tempCart = [];

		// local storage cart processing
		const storedCart = getStoredCart();
		let quantity = storedCart[id];
		if (quantity) {
			storedCart[id] = quantity + 1;
		} else {
			storedCart[id] = 1;
		}
		localStorage.setItem("cart", JSON.stringify(storedCart));

		// UI cart processing
		for (const id in storedCart) {
			let product = products.find((product) => product.id === id);
			product.quantity = storedCart[id];
			tempCart.push(product);
		}

		setCart(tempCart);
	};

	return (
		<div className='flex'>
			<div className='w-4/5'>
				<div className='w-5/6 mx-auto mt-20 grid grid-cols-3 gap-6'>
					{products.map((product, index) => (
						<Product key={index} product={product} handleCart={handleCart} />
					))}
				</div>
			</div>
			<OrderSummery
				containerStyles={
					"w-1/5 h-[100dvh] p-5 bg-[#FFE0B3] sticky top-0 right-0 space-y-10"
				}
				cart={cart}
				setCart={setCart}
				btnTitle={"Review Order"}
				btnLocation={"/order-review"}
			/>
		</div>
	);
};

export default Shop;
