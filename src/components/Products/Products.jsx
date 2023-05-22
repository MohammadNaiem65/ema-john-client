import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div className='w-4/5'>
			<div className='w-5/6 mx-auto mt-20 grid grid-cols-3 gap-6'>
				{products.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
