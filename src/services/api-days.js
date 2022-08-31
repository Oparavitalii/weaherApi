
export default class WeatherDay {
    _apiKey = "/next7days?key=AKJ3FKBUXE6W88B92JBBZ8Y7E&unitGroup=uk";
    _apiBase = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
    

    async  getWeatherData(city) {

        const res = await fetch(`${this._apiBase}${city}${this._apiKey}`);

        if(!res.ok) {
            throw new Error (`Error from ${this._urlBaseStart}${this.url}${this._urlBaseEnd}`)
        }
        return await res.json()
    }

     getWeatherForDay = async (city) => {
        const res = await this.getWeatherData(city)
        return this._getCityWeatherData(res)
    }


    _getCityWeatherData(data) {
        return {
            data : data
        }
    }

}
// const weather = new WeatherDay();
//     weather.weatherDays(Kiev,UA)
//     .then((data) => {console.log(data)})
