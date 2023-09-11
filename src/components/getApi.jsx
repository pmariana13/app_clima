
const WEATHER_API_KIT= "3a347cc52a4c7fa3ce2b86594a50444d";

const getApiInfo = async (city) => {

    const data = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city ||'buenos aires'}&appid=${WEATHER_API_KIT}`)).json();

    console.log(data)
    return data

}
export default getApiInfo;