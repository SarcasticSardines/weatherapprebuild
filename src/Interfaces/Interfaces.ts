export interface Iweather {
    weather: [
        {
            main: string
            description: string
        }
    ]
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        humidity: number
    }
    visibility: number
    wind: {
        speed: number
    }
}

export interface Igeo {
    
        name: string
        lat: number
        lon: number
        country: string
        state: string
    
}

export interface Ilocate {
    name: string
    country: string
    state: string
}