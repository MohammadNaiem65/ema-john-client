import React from "react";
import Logo from "../../assets/images/Logo.svg";
const Header = () => {
	return (
		<div className='bg-[#1C2B35] w-full h-28 text-white flex justify-between items-center px-20'>
			<img src={Logo} alt='' />
			<div className='space-x-5 text-lg'>
				<a className='hover:text-[#ff9900]' href='#'>
					Order
				</a>
				<a className='hover:text-[#ff9900]' href='#'>
					Order Review
				</a>
				<a className='hover:text-[#ff9900]' href='#'>
					Manage Inventory
				</a>
				<a className='hover:text-[#ff9900]' href='#'>
					Login
				</a>
			</div>
		</div>
	);
};

export default Header;
