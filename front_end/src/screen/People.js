import React, {useEffect} from "react";

export default function People()
{
		useEffect(() => {
		  window.location.href = 'https://deepai.org/chat';
		}, []);
	  
		// This component doesn't render anything, as the redirect happens immediately
		return null;
}