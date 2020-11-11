axios.get('https://wis.qq.com/weather/common?source=pc&weather_type=observe|forecast_1h|forecast_24h|index|alarm|limit|tips|rise&province=%E8%B4%B5%E5%B7%9E&city=%E5%85%AD%E7%9B%98%E6%B0%B4').
then(function (response) {
  // handle success
  console.log(response);

  var data = response.data.data;
  console.log(data.forecast_24h);
  const element =
  React.createElement("div", null,
  React.createElement("h1", null, "\u516D\u76D8\u6C34\u5E02 ", data['forecast_1h'][1]['weather'], " \u73B0\u5728", data['forecast_1h'][1]['degree'], "\xB0"),
  React.createElement("h2", null, "\u4ECA\u5929\u6C14\u6E29", data.forecast_24h[1].min_degree, "\xB0-", data.forecast_24h[1].max_degree, "\xB0 ", data.index.umbrella.info, " \u7D2B\u5916\u7EBF", data.index.ultraviolet.info, " \u592A\u9633\u955C", data.index.sunglasses.info),
  React.createElement("h2", null, data.index.carwash.info + data.index.carwash.name, " ", data.index.sports.info + data.index.sports.name, " ", data.index.cold.name + data.index.cold.info),
  React.createElement("h2", null, "\u660E\u65E5", data.forecast_24h[2].day_weather, data.forecast_24h[2].min_degree + '°-' + data.forecast_24h[2].max_degree + '°', " "),
  React.createElement("h2", null, "\u540E\u5929", data.forecast_24h[3].day_weather, data.forecast_24h[3].min_degree + '°-' + data.forecast_24h[3].max_degree + '°'));



  ReactDOM.render(element, document.getElementById('root'));
}).
catch(function (error) {
  // handle error
  console.log(error);
}).
then(function () {
  // always executed
});

console.log("hi");