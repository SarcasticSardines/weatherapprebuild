const savetoLocalStorage = (city: string) => {
    let favorites: string[] = getLocalStorage();
    if(!favorites.includes(city)){
        favorites.push(city);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

const getLocalStorage = () => {
    let localStorageData: string | null = localStorage.getItem("favorites");
    if(localStorageData === null){
        return [];
    }
    return JSON.parse(localStorageData);
}

const removefromLocalStorage = (city: string) => {
    let favorites: string[] = getLocalStorage();
    let cityIndex = favorites.indexOf(city);
    favorites.splice(cityIndex, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export { savetoLocalStorage, getLocalStorage, removefromLocalStorage}