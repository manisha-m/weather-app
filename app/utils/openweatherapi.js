var axios = require('axios');

var weatherUtils = {
    getCurrentWeather: function (city) {
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&type=accurate" + "&APPID=8751e7f7c3299aa34d3a6b9141e43dbb";
        console.log("this is the url " + url);
        return axios.get(url)
                .then(function (info) {
                    //var res = JSON.stringify(info);
                    //console.log("Result is " + res);
                    return info.data;
                }).catch(function (err) {
          console.warn("Exception occured " + err);  
        });
        
    },
    getFiveDayForecast: function (city) {
        var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+ city + "&type=accurate" + "&APPID=8751e7f7c3299aa34d3a6b9141e43dbb" + "&cnt=5";
        console.log("this is the url " + url);
        return axios.get(url)
                .then(function (info) {
                    //var res = JSON.stringify(info);
                    console.log("Result is %o", info);
                    return info.data;
                }).catch(function (err) {
          console.warn("Exception occured " + err);  
        });
    }
}


module.exports = weatherUtils;