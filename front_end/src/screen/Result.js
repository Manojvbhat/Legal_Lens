import React,  { useState, useEffect } from "react";
import Summary from "../components/Summary";
import ReactLoading from "react-loading";
import axios from "axios";

export default function Result(){
	const [fileContent, setFileContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    

    fetchData();
    console.log("log: ");
    console.log(fileContent);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const fetchData = async () => {
    try{
      
      
      const resp=await axios.get("http://localhost:5000/summary", { mode: 'cors' })
      
      setFileContent(resp.data.summary);
  
  } catch(error)
  {
    console.log(error);
  } finally{
    
    console.log(fileContent);
    // setLoading(false);
  } 
  };
  useEffect(()=>{
    if (fileContent !== "")
      setLoading(false)
    console.log(fileContent);
  },[fileContent])
  // if (fileContent !== "")
  //  setLoading(false)

	return(
		<div className="flex w-screen justify-center items-center h-screen" >
			
      {loading ?  <ReactLoading type="spinningBubbles" className=" pt-32" color="black" height={667} width={375} /> : <Summary  summary={fileContent}  />}
	  
    </div>
		
	)
}