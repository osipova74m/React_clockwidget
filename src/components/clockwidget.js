import { useState } from "react";

function Clockwidget() {
    // const time=new Date();
    const [time,setTime] = useState(new Date());
    let timer= setInterval(()=>setTime(new Date()),1000);
    return (
        <p>  {time.toString()}  </p>
    )

}
export default Clockwidget;