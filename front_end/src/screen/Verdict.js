import React, {useEffect,useState} from "react";
import { Comment } from "react-loader-spinner";

export default function Verdict()
{
    const [time,settime] = useState(5)
    const [winner, setWinner] = useState("")
    const [verdict, setverdict] = useState("");

    const fetchVerdict = async () => {
        try {
          const response = await fetch('http://localhost:8000/get_verdict');
          const data = await response.json();
          setWinner(data.winner);
          setverdict(data.judgement)
          console.log(verdict);
        } catch (error) {
          console.error('Error fetching verdict:', error);
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          settime(0);
        }, 10000);
        fetchVerdict()
        // Clear the timeout if the component is unmounted to avoid memory leaks
        return () => clearTimeout(timer);
      }, []);
    

    return(
    <div className=" flex justify-center text-center items-center ">
           { time ? 
           <div className=" my-14">  	
        <Comment
        visible={true}
        height="600"
        width="600"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
        />
       </div>
        :
    <div className=" w-8/12">
        <p className=" text-7xl font-extrabold pt-5"> Judgement Result</p>
        <div className=" mt-12 flex-row items-start justify-start">

        <div className="flex items-start space-x-4  justify-start "> 
       <label for = "winner" className="text-3xl font-extrabold "> Winner:</label>
        <strong><input className=" text-left w-32 p-2 text-xl  rounded-2xl" value={winner}></input></strong>
        </div>
        <br></br>
        <div className="flex items-center space-x-4  justify-center ">
        <p className=" text-3xl font-extrabold pt-5 ">Verdict:</p>
        <textarea id="verdict" className="  p-8 justify-center w-11/12 text-left text-black h-80  overflow-auto mt-8 rounded-2xl" value={verdict}></textarea>
        </div>
        </div>
    </div>
    }
    </div>
    )
}