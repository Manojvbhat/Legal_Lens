import React from "react";
import { Link } from "react-router-dom";
// let current_directory=process.cwd();
export default function Card({image_url,text})
{
	return (
		//Common card to redirect 
		<div>
			<Link to={"/"+text}>
		<div className="bg-white rounded-xl h-auto hover:drop-shadow-2xl hover:bg-gray-200 w-96 drop-shadow-lg z-10 hover:z-30 m-4">
			<img src={image_url} alt="" width={400} height={500}/>
			<p className="text-3xl font-bold text-black pb-20 text-center">{text}</p>
			
		</div>
		</Link>
		</div>
	)
}