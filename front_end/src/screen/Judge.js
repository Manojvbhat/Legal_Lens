import React from "react";
import { useNavigate } from "react-router-dom";

export default function Judge()
{
	async function handleFileChange(event) {
		const name = event.target.files[0].name;
		try{
			await fetch("http://localhost:8000/file_name", {
				method: "POST",
				body: {file_name:`${name}`},
			  })

	}
	catch(error){
		console.log(error);
	}
	  }
	let navigate = useNavigate()
	function redirect()
	{
		navigate("/Verdict")
		
	}
	return (
		<div>
			<p className=" text-center justify-center font-extrabold text-6xl pt-10 text-slate-300 ">Submit your arguments</p>
			<div className="flex pt-20 justify-center">

			<div className=" flex-col justify-center text-center " >
				<label htmlFor="txt">

			   <img src={process.env.PUBLIC_URL+"/upload_file.png"} style={{cursor:"pointer"}}  height={300} width={400}alt="" 
			    />
				</label>
			   <input type="file" onChange={handleFileChange}  style={{display:"none"} }  id="txt"/>
			   <button onClick={()=>{redirect()}} className=" bg-slate-300 h-10 w-48 rounded-xl " type="submit" >UPLOAD</button>
			</div>
			</div>
		</div>
	)
}