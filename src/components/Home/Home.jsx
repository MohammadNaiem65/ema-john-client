import React from "react";
import Products from "../Products/Products";
import OrderSummery from "../OrderSummery/OrderSummery";

const Home = () => {
	return (
		<div className='flex'>
			<Products />
			<OrderSummery />
		</div>
	);
};

export default Home;
