import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { showOrderSummery } from "../../utilities/handleOrderProcess";

const OrderSummery = ({ containerStyles, quantity }) => {
	showOrderSummery();
	return (
		<div className={containerStyles}>
			<h1 className='text-3xl mt-10 pb-3 text-center font-semibold'>
				Order Summery
			</h1>
			<div className='text-lg leading-8'>
				<p>Selected Items: {quantity}</p>
				<p>Total Price: $</p>
				<p>Total Shipping Charge: $</p>
				<p>Tax: $</p>
				<h2>Grand Total: $</h2>
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
