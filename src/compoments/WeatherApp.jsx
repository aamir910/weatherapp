import React from "react";
import "./Weather.css";
const WeatherApp = () => {
  return (
    <div className="weathermain">


      <div className="weatherparent">
        <div className="input ">
          <h3>WEATHER</h3>
          <input type="text" name="" id="" placeholder="COUNTRY NAME  " />
        </div>

        <div className="city ">
          {/* <div>icon</div> */}
          <h1 className="">city Name: rawalpindi </h1>
        </div>
        <div className="weathertype">
          <h4>weather : </h4>
          <h6> Celcius</h6>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
