import React, { useState } from "react";
import OrderSummery from "../OrderSummery/OrderSummery";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Shop = () => {
	const products = useLoaderData();

	return (
		<div className='flex'>
			<div className='w-4/5'>
				<div className='w-5/6 mx-auto mt-20 grid grid-cols-3 gap-6'>
					{products.map((product, index) => (
						<Product key={index} product={product} />
					))}
				</div>
			</div>
			<OrderSummery
				containerStyles={
					"w-1/5 h-[100dvh] p-5 bg-[#FFE0B3] sticky top-0 right-0 space-y-10"
				}
			/>
		</div>
	);
};

export default Shop;
