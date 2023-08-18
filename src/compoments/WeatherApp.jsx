import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
const WeatherApp = () => {
  const [city, setcity] = useState(null);
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
  <h2 > {details.name} {details.sys.country} </h2>
 
</div>
<div className="weathertype">
  <h2>WEATHER DETAILS</h2>
  <div className="centered-content">
    <h3>Temp:{details.main.temp- 273}°C</h3>
    <h6>MIN|{details.main.temp_min- 273}°C <br /> MAX| {details.main.temp_max- 273}°C</h6>
    <h4>FeelLike: {details.main.feels_like- 273}°C</h4>
    <h3> Wind Speed: {details.wind.speed}   </h3>

  </div>
</div>
  </>
)
}

     
    </div>
  );
};

export default WeatherApp;
