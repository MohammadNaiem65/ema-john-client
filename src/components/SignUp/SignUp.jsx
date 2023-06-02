import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleImage from "../../assets/images/google.png";

const SignUp = () => {
	const [emailBlur, setEmailBlur] = useState(true);
	const [passwordBlur, setPasswordBlur] = useState(true);
	const [confirmPasswordBlur, setConfirmPasswordBlur] = useState(true);

	const handleBlur = (e) => {
		if (e.target.value !== "") return;
		else if (e.target.name === "email") setEmailBlur(!emailBlur);
		else if (e.target.name === "password") setPasswordBlur(!passwordBlur);
		else if (e.target.name === "confirm-password") {
			setConfirmPasswordBlur(!confirmPasswordBlur);
		}
	};
	return (
		<div className='h-[85dvh] grid place-items-center'>
			<div
				className='w-[27rem] h-[33rem] text-[#2A414F] rounded-md border-2 bg-primary px-11 py-8 flex flex-col justify-between'
				style={{ boxShadow: "-10px 10px #FFE0B3" }}>
				<h1 className='text-3xl text-center'>Sign Up</h1>
				{/* Main form container */}
				<form className='space-y-8'>
					<div className='form-control h-10 relative flex items-center'>
						<label
							htmlFor='email'
							className={`ml-2 absolute ${
								emailBlur ? "top-1 text-lg" : "-top-6"
							} duration-300 z-0`}>
							Email
						</label>
						<input
							onFocus={handleBlur}
							onBlur={handleBlur}
							type='email'
							name='email'
							className='w-full h-full py-1 px-2 border-2 border-[#95A0A7] outline-none rounded-md z-10'
							style={{ background: "none" }}
							required
						/>
					</div>
					<div className='form-control h-10 relative flex items-center'>
						<label
							htmlFor='password'
							className={`ml-2 absolute ${
								passwordBlur ? "top-1 text-lg" : "-top-6"
							} duration-300 z-0`}>
							Password
						</label>
						<input
							onFocus={handleBlur}
							onBlur={handleBlur}
							type='password'
							name='password'
							className='w-full h-10 py-1 px-2 border-2 border-[#95A0A7] outline-none rounded-md z-10'
							style={{ background: "none" }}
							required
						/>
					</div>
					<div className='form-control h-10 relative flex items-center'>
						<label
							htmlFor='confirm-password'
							className={`ml-2 absolute ${
								confirmPasswordBlur ? "top-1 text-lg" : "-top-6"
							} duration-300 z-0`}>
							Confirm Password
						</label>
						<input
							onFocus={handleBlur}
							onBlur={handleBlur}
							type='confirm-password'
							name='confirm-password'
							className='w-full h-10 py-1 px-2 border-2 border-[#95A0A7] outline-none rounded-md z-10'
							style={{ background: "none" }}
							required
						/>
					</div>
					<div>
						<button
							type='submit'
							className='w-full p-3 bg-[#FFE0B3] text-lg rounded-md hover:bg-[hsl(36,100%,65%)]'>
							Sign Up
						</button>
						<p className='text-center'>
							<small>
								Already have an account?{" "}
								<Link
									to={"/login"}
									className='font-semibold text-[#FFD700] hover:text-[hsl(36,100%,65%)]'>
									Login
								</Link>
							</small>
						</p>
					</div>
				</form>
				<div>
					<div className='h-3 flex justify-center border-t-2 border-t-[#95A0A7] relative'>
						<p className='px-5 text-[#95A0A7] absolute -top-4 bg-white'>Or</p>
					</div>
				</div>
				<button className='w-full p-3 border-2 border-[#95A0A7] flex justify-center items-center rounded-md'>
					<img src={googleImage} alt='Goggle image' className='w-7 mr-2' />{" "}
					Continue with Google
				</button>
			</div>
		</div>
	);
};

export default SignUp;
