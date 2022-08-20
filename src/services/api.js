export default class WeatherApi {
    _urlBaseStart = "https://api.openweathermap.org/data/2.5/weather?q="
    _urlBaseEnd = "&appid=002af017b525a005080d723f4fb80f29&units=metric"


    async  getWeatherData(url) {

        const res = await fetch(`${this._urlBaseStart}${url}${this._urlBaseEnd}`);

        if(!res.ok) {
            throw new Error (`Error from ${this._urlBaseStart}${this.url}${this._urlBaseEnd}`)
        }
        return await res.json()
    }


    async getCityWeather(url) {
        const res = await this.getWeatherData(url)
        return this._getCityWeatherData(res)
    }
    _getCityWeatherData (data) {
        return {
            temp : data.main.temp,
            precipitation : data.weather[0].main,
            name:data.name
        }
    }
}
// const apiWeather = new WeatherApi();

// apiWeather.getCityWeather("kyiv").then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.error(`error ${err}`)
// })

