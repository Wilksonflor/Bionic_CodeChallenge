import { useEffect, useState } from "react";
function Alarmes() {
  const [alarms, setAlarms] = useState([]);

  
    fetch('http://localhost:8082/alarms/',{
        method: 'GET',
        headers:{
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json());
    .catch((err) => console.log(err))
    return (
        <div>
            <p>Alarmes</p>
        </div>
      )
}

export default Alarmes();
