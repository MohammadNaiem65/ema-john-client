import React from "react";
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div className='bg-[#1C2B35] w-full h-28 text-white flex justify-between items-center px-20'>
			<img src={Logo} alt='' />
			<div className='space-x-5 text-lg'>
				<Link className='hover:text-[#ff9900]' to='/'>
					Order
				</Link>
				<Link className='hover:text-[#ff9900]' to='/order-review'>
					Order Review
				</Link>
				<Link className='hover:text-[#ff9900]' to='/inventory'>
					Manage Inventory
				</Link>
				<Link className='hover:text-[#ff9900]' to='/login'>
					Login
				</Link>
			</div>
		</div>
	);
};

export default Header;
