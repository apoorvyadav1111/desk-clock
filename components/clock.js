"use client";
import { useEffect, useState} from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const interval = setInterval(()=>{
          setTime(new Date());
      }, 1000);
      return ()=>clearInterval(interval);
      }, []);
      
    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return null;



    let options = { weekday: 'short'};
    const formattedday = time.toLocaleDateString(undefined, options);
    options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = time.toLocaleDateString(undefined, options);
  
    return (
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="md:text-start text-center">
          <div className="text-gray-700 dark:text-gray-400 text-3xl md:text-5xl">
            <span className="text-red-500 font-bold">{formattedday}, </span>{formattedDate}
          </div>
          <div className="translate-y-[-4] md:text-9xl text-5xl">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
          {/* </div>
          <div className="text-orange-500 text-3xl"> */}
            {<span className="md:text-5xl text-2xl text-orange-500">:{time.toLocaleTimeString([],{second: '2-digit' })>9?time.toLocaleTimeString([],{second: '2-digit' }):'0'+time.toLocaleTimeString([],{second: '2-digit' })}</span> }
          </div>

        </div>

      </div>
    );
}
 
export default Clock;