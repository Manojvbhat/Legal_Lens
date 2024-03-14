import React from "react";

export default function Summary({summary})
{
	return(
		<div className=" w-3/5 items-center text-center ">
			<p className=" text-7xl font-extrabold pt-5"> Summary</p>
			<textarea className=" p-8 w-full text-black h-56 text-justify overflow-auto mt-20 rounded-2xl" type="text" value={summary} />
		</div>
	)
}