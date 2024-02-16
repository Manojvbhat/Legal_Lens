import React from "react";

export default function Summary({summary})
{
	return(
		<div className=" items-center text-center">
			<p className=" text-7xl font-extrabold pt-5"> Summary</p>
			<input className=" w-3/4 h-96 mt-20 rounded-2xl" type="text" value={summary} />
		</div>
	)
}