import React from "react";
// let current_directory=process.cwd();
 let path=__dirname+"./public/hammer.png"
export default function Card()
{
	return (
		<div className="bg-black rounded-xl h-auto  w-96 drop-shadow-lg z-10 hover:z-30 m-4">
			<img src={path} alt="" width="400" height="" />
			<p className="text-lg text-white">For Judges</p>
		</div>
	)
}