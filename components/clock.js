"use client";
import { useEffect, useState} from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(()=>{
            setTime(new Date());
        }, 1000);
    return ()=>clearInterval(interval);
    }, []);

    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = time.toLocaleDateString(undefined, options);
  
    return (
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="text-start">
          <div className="text-5xl dark:text-gray-400">
            <span>&nbsp;</span>{formattedDate}
          </div>
          <div className="translate-y-[-4] text-9xl">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'})}
          </div>

        </div>

      </div>
    );
}
 
export default Clock;