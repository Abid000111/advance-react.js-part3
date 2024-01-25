"use client"
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const page = () => {
	const notify = () => {
		toast("Login successfull")
	}
	return (
		<>
		<div>
			<button onClick={notify} className="h-10 w-28 bg-green-400 rounded-3xl text-xl font-bold m-10">
				Login
			</button>
			<ToastContainer />
		</div>
			;
		</>
	);
};

export default page;
