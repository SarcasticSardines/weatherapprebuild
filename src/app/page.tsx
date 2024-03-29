'use client'

import { Button, TextInput } from "flowbite-react";
import navi from '../assets/navIcon tspt.png'
import NavbarComponent from "./components/NavbarComponent";
import ForecastComponent from "./components/ForecastComponent";
import { useState } from "react";
import { Iweather } from "@/Interfaces/Interfaces";

export default function Home() {

  const weatherDefault = {
    weather: [
      {
          main: "",
          description: ""
      }
  ],
  main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      humidity: 0
  },
  visibility: 0,
  wind: {
      speed: 0
  }
  }

  
  const [lat, setLat] = useState<Iweather>();
  const [lon, setLon] = useState<Iweather>();
  const [mainT, setMainT] = useState<Iweather>();
  const [highT, setHighT] = useState<Iweather>();
  const [lowT, setLowT] = useState<Iweather>();
  const [feels, setFeels] = useState<Iweather>();
  const [mainD, setMainD] = useState<Iweather>();
  const [detailed, setDetailed] = useState<Iweather>();
  const [humid, setHumid] = useState<Iweather>();
  const [visible, setVisible] = useState<Iweather>();
  const [windy, setWindy] = useState<Iweather>();


  
  const randLat = () => {
    let anyLat: any = (Math.random()*180).toFixed(3);
    let NegPos = Math.floor(Math.random());
    if(NegPos == 0){
      anyLat = anyLat *-1;
    }
    return anyLat
  }

  const randLon = () => {
    let anyLon: any = (Math.random()*180).toFixed(3);
    let PosNeg = Math.floor(Math.random());
    if(PosNeg == 0){
        anyLon = anyLon *-1;
    }
    return anyLon
  }

  const allowMe = (position: any) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  }
  const denyMe = () => {
    alert("Error occured in retrieving current location");
  }

    navigator.geolocation.getCurrentPosition(allowMe(), denyMe());


  return (
    <div>

      {/* "navbar" */}
      <NavbarComponent/>

      <div className="flex justify-center">
        <hr />
      </div>

      <div className='flex justify-center mt-9 mb-0'>
        <input type="text" className="mx-1 inputs" />
        <button className="mx-1 wBtn">
          <span className="text-3xl text-white">Go</span>  </button>
      </div>

      <div className='lg:flex lg:justify-evenly mb-10 mt-1 mx-12'>
        <div className='circle my-10'>
          {/* circle div */}
          <h2 className='text-center my-9 text-4xl'>100°/110°</h2>
          <h1 className='text-center my-9 text-6xl'>100°</h1>
          <h2 className='text-center my-9 text-4xl'>feelslike°</h2>
        </div>

        <div className="my-1 mx-8 ">
          {/* 3 rows 2 cols, 6 items total */}

          <div className="grid grid-cols-2 gap-28 my-[70px]">
            <div className="grid">
              <p className="text-4xl">Humidity: 100%</p>
            </div>
            <div className="grid text-4xl col-start-2">
              <p>Main Description</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-28 my-[70px] ms-9">
            <div className="grid">
              <p className="text-4xl">Visibility: 10000m</p>
            </div>
            <div className="grid text-4xl col-start-2">
              <p>Detailed Description</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-28 my-[70px]">
            <div className="grid">
              <p className="text-4xl">Wind Speed: 50mph</p>
            </div>
            <div className="flex text-4xl">
              <p>Truth or Consequences, NM</p>
              <img src={navi.src} alt="geolocator icon" className="iconXS" />
            </div>
          </div>
        </div>
      </div>

      <ForecastComponent/>


    </div>
  );
}
