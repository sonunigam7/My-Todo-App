import { useEffect, useState } from "react";

export const TodoDate=()=>{
    const [dateTime, setDateTime] = useState('')

     //todo date and time
     useEffect(() => {
        const getDatTime = () => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`)
        }
        const intervalID = setInterval(() => {
            getDatTime();
        }, 1000)
        return () => clearInterval(intervalID);
    }, [])
    return(
        <h2 className='date-time'>{dateTime}</h2>
    )
}