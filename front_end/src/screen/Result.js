import React,  { useState, useEffect } from "react";
import Summary from "../components/Summary";

import {BounceLoader} from "react-spinners";

export default function Result(){
	const [fileContent, setFileContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await  fetch("http://localhost:8000/summary",{
			method:"GET",
			
		});
        
        ;
        setFileContent(response);
      } catch (error) {
        console.error('no data', error);
      } finally {
        
        setLoading(false);
      }
    };

    fetchData();
  }, []);
	return(
		<div >
			
      {loading ? <BounceLoader  color="#36d7b7" size={200} /> : <Summary summary={fileContent}  />}
	  
    </div>
		
	)
}