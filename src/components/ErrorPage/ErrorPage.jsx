import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	const { status, statusText, data } = error;
	console.log(error);
	return (
		<div className='w-full h-[100dvh] flex flex-col justify-center items-center'>
			<h1 className='text-5xl font-bold'>
				Code: {status} <span className='text-[#ff9900] text-6xl mx-5'>|</span>{" "}
				{statusText}
			</h1>
			<p className='text-xl mt-3'>{data}</p>
			<Link
				className='px-7 py-3 rounded-lg mt-5 font-bold text-xl text-white bg-[#ff9900]'
				to='/'>
				Home
			</Link>
		</div>
	);
};

export default ErrorPage;
