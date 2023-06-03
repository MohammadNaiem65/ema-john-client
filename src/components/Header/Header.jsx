import React, { useContext } from "react";
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/providers/AuthProvider";

const Header = () => {
	const { user, setUser, logOutUser } = useContext(AuthContext);

	const handleLogOut = () => {
		logOutUser()
			.then(() => {})
			.catch((err) => console.error(err));
		setUser(null);
	};
	console.log(user);
	return (
		<nav className='bg-[#1C2B35] w-full h-28 text-white flex justify-between items-center px-20'>
			<img src={Logo} alt='' />
			<div className='space-x-5 text-lg flex'>
				<Link className='hover:text-[#ff9900]' to='/'>
					Order
				</Link>
				<Link className='hover:text-[#ff9900]' to='/order-review'>
					Order Review
				</Link>
				<Link className='hover:text-[#ff9900]' to='/inventory'>
					Manage Inventory
				</Link>
				{user ? (
					<div className='flex space-x-5'>
						<p
							className='cursor-pointer hover:text-[#ff9900]'
							onClick={handleLogOut}>
							Log Out
						</p>
						<p>
							Welcome,{" "}
							<span className='text-[#ff9900] ml-1'>
								{user.email.charAt(0).toUpperCase() + user.email.slice(1)}
							</span>
						</p>
					</div>
				) : (
					<div className='space-x-1'>
						<Link className='hover:text-[#ff9900]' to='/login'>
							Login
						</Link>
						<span>/</span>
						<Link className='hover:text-[#ff9900]' to='/sign-up'>
							Sign Up
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Header;
