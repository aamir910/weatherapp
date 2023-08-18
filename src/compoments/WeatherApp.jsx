import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
const WeatherApp = () => {
  const [city, setcity] = useState("");
  const [details, setdetails] = useState(null);
  
  useEffect(()=>{
    const fetchApi = async () => {
      try {
  
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6769946a9076565613def7b9f5bb9c29
          `
          );
          // console.log(response.data)
        setdetails(response.data);
        // console.log(details)
      } catch (error) {
        console.log("not find api ")
      }
    };
    fetchApi()  ; 
  } , [city])
  const handlechange = (event) => {
    setcity(event.target.value);
  };

  console.log(details)
  return (


    <div className="weathermain">
  <div className="input ">
  
  
  <h1>WEATHER</h1>
  <input
    type="text"
    name=""
    id=""
    placeholder="COUNTRY NAME  "
    onChange={handlechange}
  />
</div>
{ !details ? (
  <h1>record not find </h1> 
):
(
  <>


<div className="city ">
  {/* <div>icon</div> */}
  <h2 className=""> {details.name} {details.sys.country} </h2>
  <h3>  {details.weather.description}   </h3>
</div>
<div className="weathertype">

  <h2>TEMPERATURE</h2>
  <h4>{details.main.temp}</h4>
  <h6>MIN|{details.main.temp_min}  MAX| {details.main.temp_max} </h6>
</div>
  </>
)
}

     
    </div>
  );
};

export default WeatherApp;
