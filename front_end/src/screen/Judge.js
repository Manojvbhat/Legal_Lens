import React from "react";

export default function Judge()
{
	return (
		<div>
			<p className=" text-center justify-center font-extrabold text-6xl pt-10 text-slate-300 ">Submit your arguments</p>
			<div className="flex pt-20 justify-center">

			<form  method="post"  action="/Lawyer" className=" flex-col justify-center text-center " >
				<label htmlFor="txt">

			   <img src={process.env.PUBLIC_URL+"/upload_file.png"} style={{cursor:"pointer"}}  height={300} width={400}alt="" />
				</label>
			   <input type="file"   style={{display:"none"} }  id="txt"/>
			   <button className=" bg-slate-300 h-10 w-48 rounded-xl " type="submit" >UPLOAD</button>
			</form>
			</div>
		</div>
	)
}