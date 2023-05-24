import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OrderSummery = ({ containerStyles, cart }) => {
	let quantity = 0;
	let totalPrice = 0;
	let shippingCharge = 0;

	for (let cartItem of cart) {
		quantity = quantity + cartItem.quantity;
		totalPrice = totalPrice + cartItem.price * cartItem.quantity;
		shippingCharge = shippingCharge + cartItem.shipping;
	}

	const tax = totalPrice * 0.05;
	const grandTotal = totalPrice + shippingCharge + tax;

	console.log(cart);

	return (
		<div className={containerStyles}>
			<h1 className='text-3xl mt-10 pb-3 text-center font-semibold'>
				Order Summery
			</h1>
			<div className='text-lg leading-8'>
				<p>Selected Items: {quantity}</p>
				<p>Total Price: ${totalPrice}</p>
				<p>Total Shipping Charge: ${shippingCharge}</p>
				<p>Tax: ${tax.toFixed(2)}</p>
				<h2 className='mt-5 text-xl font-semibold'>
					Grand Total: ${grandTotal.toFixed(2)}
				</h2>
			</div>
			<div className='text-white mt-5 space-y-3'>
				<button className='w-full p-3 bg-[#ff3030] rounded-md duration-300 hover:bg-[#ff9900]'>
					Clear Cart <FontAwesomeIcon icon={faTrashCan} />
				</button>
				<button className='w-full p-3 bg-[#ff9900] rounded-md duration-300 hover:bg-[hsl(36,100%,65%)]'>
					Review Order <FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</div>
	);
};

export default OrderSummery;
