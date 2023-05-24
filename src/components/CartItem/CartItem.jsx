import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CartItem = ({ cartItem, removeCartItem }) => {
	const { img, name, price, quantity, id } = cartItem;
	return (
		<div className='w-4/5 p-5 border-2 grid grid-cols-5 rounded-lg'>
			<img className='w-24 h-24 rounded-lg' src={img} alt='' />
			<div className='col-span-4 flex justify-between items-center'>
				<div className='w-[27.5rem]'>
					<h2 className='text-lg font-semibold'>{name}</h2>
					<p>
						Price: <span className='text-[#FFD700]'>${price}</span>
					</p>
					<p>
						Quantity: <span className='text-[#FFD700]'>{quantity}</span>
					</p>
				</div>
				<p
					className='w-14 text-3xl text-red-600 bg-red-100 aspect-square flex justify-center items-center rounded-full cursor-pointer hover:bg-red-200'
					onClick={() => removeCartItem(id)}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</p>
			</div>
		</div>
	);
};

export default CartItem;
