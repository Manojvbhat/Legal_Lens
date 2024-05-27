import React, {useEffect,useState} from "react";
import { Comment } from "react-loader-spinner";

export default function Verdict()
{
    const [time,settime] = useState(5)
    useEffect(()=>
    {

        setTimeout(settime(0), 10000)
    }
   ,[time] )

    return(
    <div>
           { time} ? <Comment
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
    </div>
    </div>
    )
}