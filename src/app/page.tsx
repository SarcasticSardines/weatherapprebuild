'use client'

import { Button, TextInput } from "flowbite-react";
import navi from '../assets/navIcon tspt.png'
import NavbarComponent from "./components/NavbarComponent";
import ForecastComponent from "./components/ForecastComponent";
import { useEffect, useState } from "react";
import { Iforecast, Igeo, Ireverse, Iweather } from "@/Interfaces/Interfaces";
import { getCurrent, getForecast, getGeo, getLocation } from "@/utils/DataServices";

export default function Home() {


  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);
  const [here, setHere] = useState();
  const [temp, setTemp] = useState<Iweather>();
  const [loca, setLoca] = useState<Ireverse>();
  const [geol, setGeol] = useState<Igeo[]>();
  const [fore, setFore] = useState<Iforecast>();
  const [city, setCity] = useState<string | undefined>();
  const [dayy, setDayy] = useState<string>();

  // const [mainT, setMainT] = useState<Iweather>();
  // const [highT, setHighT] = useState<Iweather>();
  // const [lowT, setLowT] = useState<Iweather>();
  // const [feels, setFeels] = useState<Iweather>();
  // const [mainD, setMainD] = useState<Iweather>();
  // const [detailed, setDetailed] = useState<Iweather>();
  // const [humid, setHumid] = useState<Iweather>();
  // const [visible, setVisible] = useState<Iweather>();
  // const [windy, setWindy] = useState<Iweather>();



  // const randLat = () => {
  //   let anyLat: any = (Math.random()*180).toFixed(3);
  //   let NegPos = Math.floor(Math.random());
  //   if(NegPos == 0){
  //     anyLat = anyLat *-1;
  //   }
  //   return anyLat
  // }

  // const randLon = () => {
  //   let anyLon: any = (Math.random()*180).toFixed(3);
  //   let PosNeg = Math.floor(Math.random());
  //   if(PosNeg == 0){
  //       anyLon = anyLon *-1;
  //   }
  //   return anyLon
  // }

  // const theDate = () => {
  //   const twoday = new Date(fore?.list[0].dt *1000)
  // }

  const allowMe: PositionCallback = (position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  }
  const denyMe = () => {
    alert("Error occured in retrieving current location.");
  }


//   const searchFill = async () => {
//     let search = e.target.value;
//     let locateData;
//     if(search != ""){
//       city = search;
//       const fillData = await getGeo(city);
//       let storeMe = []
//       for(let i = 0; i<locateData.length; i++){
//         storeMe.push(locateData[i].name + ", " + locateData[i].state + ", " + locateData[i].lat + ", " + locateData[i].lon)
//       }


// ;    }
//   }


  // useEffect(() => {
    // const weatherNow = () => {
      // navigator.geolocation.getCurrentPosition(allowMe, denyMe )
      // setLat(coords.latitude);
      // setLon(coords.longitude);
      // setHere({ lat, lon })
      // if (here) {
      //   getLocation(lat, lon);
      // }
    // }
    // weatherNow();
  // }, []);


  useEffect(() => {

    navigator.geolocation.getCurrentPosition(allowMe, denyMe)

    const getWData = async (lat: number, lon: number) => {
      const weatherData = await getCurrent(lat, lon);
      setTemp(weatherData);
    }
    
    const getRData = async (lat: number, lon: number) => {
      const locateData = await getLocation(lat, lon);
        setLoca(locateData);
        setCity(loca?.name);
      console.log(loca);
    }

    const getGData = async (city: string) => {
      const geoData = await getGeo(city);
      setGeol(geoData);
    }

    const getFData = async (lat: number, lon: number) => {
      const forecastData = await getForecast(lat, lon);
      setFore(forecastData);
    }

    getWData(lat, lon);
    getRData(lat, lon);
    // getGData(city);
    // type string | undefined error....
    getFData(lat, lon);

  }, []);


  return (
    <div>

      {/* "navbar" */}
      <NavbarComponent />

      <div className="flex justify-center">
        <hr />
      </div>

      <div className='flex justify-center mt-9 mb-0'>
        <input type="text" className="mx-1 inputs"  />
        <button className="mx-1 wBtn">
          <span className="text-3xl text-white">Go</span>  </button>
      </div>

      <div className='lg:flex lg:justify-evenly mb-10 mt-1 mx-12'>
        <div className='circle my-10'>
          {/* circle div */}
          <h2 className='text-center my-9 text-4xl'>{temp?.main.temp_max + "°" + "/" + temp?.main.temp_min + "°"}</h2>
          <h1 className='text-center my-9 text-6xl'>{temp?.main.temp + "°"}</h1>
          <h2 className='text-center my-9 text-4xl'>{temp?.main.feels_like + "°"}</h2>
        </div>

        <div className="my-1 mx-8 ">
          {/* 3 rows 2 cols, 6 items total */}

          <div className="grid grid-cols-2 gap-28 my-[70px]">
            <div className="grid">
              <p className="text-4xl">{"Humidity: " + temp?.main.humidity + "%"}</p>
            </div>
            <div className="grid text-4xl col-start-2">
              <p>{temp?.weather[0].main}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-28 my-[70px] ms-9">
            <div className="grid">
              <p className="text-4xl">{"Visibility: " + temp?.visibility + "m"}</p>
            </div>
            <div className="grid text-4xl col-start-2">
              <p>{temp?.weather[0].description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-28 my-[70px]">
            <div className="grid">
              <p className="text-4xl">{"Wind Speed: " + temp?.wind.speed + "mph"}</p>
            </div>
            <div className="flex text-4xl">
              {/* <p>{geol. + ", " + loca?.state}</p> */}
              {/* loca?.name undefined, temp?.name only returns global */}
              <img src={navi.src} alt="geolocator icon" className="iconXS" />
            </div>
          </div>
        </div>
      </div>

      <ForecastComponent Datenow={fore?.list[0].dt_txt} Mainw={fore?.list[0].weather[0].description} Mint={fore?.list[0].main.temp_min} Maxt={fore?.list[0].main.temp_max} IconCode={fore?.list[0].weather[0].icon} />


    </div>
  );
}
