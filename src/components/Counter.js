import React, { useEffect, useState } from "react";
import "./Counter.css";

function Counter({from}) {

  const calculateTimeFrom = () => {
    const difference = +new Date() - +new Date(from);
    let timeFrom = {};
    if (difference > 0) {
      timeFrom = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeFrom;
  }

  let [timeFrom, setTimeFrom] = useState(calculateTimeFrom());

  useEffect( ()=>{
    const timerID = setInterval(
      () => {
        setTimeFrom(calculateTimeFrom());
      },
      1000
    );
    return () => { clearInterval(timerID);}
  })

  return (
    <div className="Counter">
      <p>
        <span> {timeFrom.days} days </span>
        {timeFrom.hours > 0 &&  
            <span>{timeFrom.hours} hours</span>
        }
        { timeFrom.minutes > 0 && 
        <>
        <span> and </span>
        <span>{timeFrom.minutes} minutes</span>
        </>
        }
      </p>
      <p className="emoji">🔥👏</p>
    </div>
  );
}

export default Counter;