import React, {useEffect,useState} from "react";
import { Comment } from "react-loader-spinner";

export default function Verdict()
{
    const [time,settime] = useState(5)
    useEffect(() => {
        const timer = setTimeout(() => {
          settime(0);
        }, 10000);
    
        // Clear the timeout if the component is unmounted to avoid memory leaks
        return () => clearTimeout(timer);
      }, []);
    

    return(
    <div>
           { time===5 ? <Comment
        visible={true}
        height="200"
        width="200"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
        />
        :
    <div>
        <p className=" text-7xl font-extrabold pt-5"> Verdict</p>
			<textarea className=" p-8 w-full text-black h-56 text-justify overflow-auto mt-20 rounded-2xl" type="text" value="Masala Puri" />
    </div>}
    </div>
    )
}