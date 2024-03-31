import { Igeo } from "@/Interfaces/Interfaces";

// import { key } from "@/environment"
const key: string | undefined = process.env.NEXT_PUBLIC_key;


export const getCurrent = async (lat:number, lon:number) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`);
    const data = await promise.json();
    return data;
}

export const getLocation = async (lat:number, lon:number) => {
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${key}`);
    const data = await promise.json();
    return data;
}

export const getGeo = async (city:string ) => {
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}840&limit=5&appid=${key}`);
    const data: Igeo[] = await promise.json();
    return data;
}

export const getForecast = async (lat:number, lon:number) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`);
    const data = await promise.json();
    return data;
}