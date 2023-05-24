import React, { useEffect, useState } from "react";
import OrderSummery from "../OrderSummery/OrderSummery";
import CartItem from "../CartItem/CartItem";
import { useLoaderData } from "react-router-dom";

const OrderReview = () => {
	const containerStyles = "h-[60vh] p-7 bg-[#FFE0B3] rounded-lg";

	const products = useLoaderData();
	const [cart, setCart] = useState([]);
	const storedCart = JSON.parse(localStorage.getItem("cart"));

	useEffect(() => {
		let tempCart = [];
		for (const id in storedCart) {
			const chosenProduct = products.find((product) => product.id === id);
			if (chosenProduct) {
				chosenProduct.quantity = storedCart[id];
			}
			tempCart.push(chosenProduct);
		}
		setCart(tempCart);
	}, [products]);

	const removeCartItem = (id) => {
		const remaining = cart.filter((cartItem) => cartItem.id !== id);
		setCart(remaining);

		if (id in storedCart) {
			delete storedCart[id];
			localStorage.setItem("cart", JSON.stringify(storedCart));
		}
	};

	return (
		<div className='w-4/5 mx-auto mt-28 grid grid-cols-3'>
			<div className='col-span-2 space-y-5'>
				{cart.map((cartItem) => (
					<CartItem
						key={cartItem.id}
						cartItem={cartItem}
						removeCartItem={removeCartItem}
					/>
				))}
			</div>
			<OrderSummery
				cart={cart}
				setCart={setCart}
				containerStyles={containerStyles}
				btnTitle={"Proceed Checkout"}
				btnLocation={"/"}
			/>
		</div>
	);
};

export default OrderReview;
