import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({ product }) => {
	console.log(product);
	const { img, name, price, seller, ratings } = product;
	return (
		<div className='h-[31.75rem] p-1 border-2 rounded-lg relative flex flex-col space-y-2 duration-300 cursor-pointer  hover:scale-105 hover:shadow-xl'>
			<img className='h-[17.875rem] w-full rounded-lg' src={img} alt='' />
			<div className='h-[10rem] p-2 flex flex-col justify-between'>
				<div>
					<h2 className='text-2xl font-semibold'>{name}</h2>
					<p className='text-xl'>Price: ${price}</p>
				</div>
				<div className='leading-5'>
					<p>Manufacturer: {seller}</p>
					<p>
						Rating: {ratings}{" "}
						<FontAwesomeIcon className='text-[#FFD700]' icon={faStar} />
					</p>
				</div>
			</div>
			<button className='w-full bg-[#FFE0B3] p-2 font-semibold border-t-2 absolute bottom-0 left-0 rounded-b-lg'>
				Add To Cart <FontAwesomeIcon icon={faCartPlus} />
			</button>
		</div>
	);
};

export default Product;
