import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'd8f607ae6ea9107c77893b48f3101581';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error){
        throw error;
    }
}