export interface Iweather {
    coord: {
        lon: number
        lat: number
    }
    weather: [
        {
            main: string
            description: string
            icon: string
            id: number
        }
    ]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        humidity: number
        pressure: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
        gust: number
    }
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    clouds: {
        all: number
    }
    dt: number
    timezone: number
    id: number
    name: string
    cod: number
}

export interface Igeo {
    
        name: string
        lat: number
        lon: number
        country: string
        state: string
        local_names?: {}
    
}

export interface Ireverse {
     
            name: string
            country: string
            state: string
        
}

export interface Iforecast {
    list: [
        {
            dt: number
            dt_txt: string
            main: {
                temp: number
                temp_min: number
                temp_max: number
            }
            weather: [
                {
                    main: string
                    description: string
                    icon: string
                }
            ]
        }
    ]
}

export interface IforecastProps {
    Mainw: string | undefined
    Mint: number | undefined
    Maxt: number | undefined
    Datenow: string | undefined
    IconCode: string | undefined
}