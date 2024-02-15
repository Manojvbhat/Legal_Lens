import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function Lawyer()
{
	let navigate=useNavigate()
	const upload=async(event)=>{
		event.preventDefault()
		const file=document.getElementById("txt").files[0]
		console.log(file);
		try{
			const formdata= new FormData();
			formdata.append("file",file)
		// 	axios.post("https://localhost:8000/upload", formdata, {
		// 	headers: {
		// 		"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"
		// 	},
		//   })
		const response= await fetch("http://localhost:8000/upload",{
			method:"POST",
			body:formdata
		})
		console.log(response);
		} catch(error){
			console.log(error);
		}
	
		navigate("/Lawyer")
		
	}
	return (
		<div>
			<p className=" text-center justify-center font-extrabold text-6xl pt-10 ">Upload Your File</p>
			<div className="flex pt-20 justify-center">

			<form  method="post" onSubmit={(event)=>{upload(event)}} action="/Lawyer" className=" flex-col justify-center text-center " >
				<label htmlFor="txt">

			   <img src={process.env.PUBLIC_URL+"/plus_icon.png"} style={{cursor:"pointer"}}  height={300} width={400}alt="" />
				</label>
			   <input type="file"   style={{display:"none"} }  id="txt"/>
			   <button className=" bg-gray-400 h-10 w-48 rounded-xl " type="submit" >UPLOAD</button>
			</form>
			</div>
		</div>
	)
}