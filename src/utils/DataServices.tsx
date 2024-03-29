// import { key } from "@/environment"
const key = process.env.NEXT_PUBLIC_ACCESS_key


// export const getCurrent = async ({lat, lon}) => {
//     const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`);
//     const data = await promise.json();
//     return data;
// }

// export const getGeo = async () => {
//     const promise = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${key}`);
//     const data = await promise.json();
//     return data;
// }

// export const getSearch = async () => {
//     const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${place}840&limit=5&appid=${key}`);
//     const data = await promise.json();
//     return data;
// }

// export const getForecast = async () => {
//     const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`);
//     const data = await promise.json();
//     return data;
// }