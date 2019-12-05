$("#city-form").submit(function(event) {
		event.preventDefault();

		var cityName = $("#city-name").val();
		getWeather(cityName);
	});

	function getWeather(city){
		$.get("http://api.openweathermap.org/data/2.5/weather",
			{
				"q":city,
				"lang":"pl",
				"appid":"79f4c706e21b976faa3aee2a3a75e6c4"
			},
			function(data){
				let out = '';
				out += 'Kraj: <b>' +data.sys.country +'</b><br>';
				out += 'Miasto: <b>' + data.name + '</b><br>';
				out += 'Pogoda: <b>'+ data.weather[0].main+'</b><br>';
				out += 'Szczegolu Pogoda: <b>'+ data.weather[0].description+'</b><br>';
				out += '<img src="https://openweathermap.org/img/w/'+data.weather[0].icon+'.png"><br>';
				out += 'Temperatura: <b>' +Math.round(data.main.temp-273)+'&#176;C</b><br>';
				out += 'Wilgotnosc: <b>' +data.main.humidity +'%</b><br>';
				out += 'Cisnienie: <b>' + data.main.pressure +' hPa</b><br>';
				out += 'Widocznosc: <b>' + (data.visibility/1000) + 'km</b><br>';
				out += 'Wiatr: <b>' + data.wind.speed + 'm/s</b><br>';
				out += 'Zachmurzenie: <b>' + data.clouds.all + '%</b><br>';
				function changeweather(){ 
					if (data.weather[0].description == 'bezchmurnie')
						document.getElementById("demo").innerHTML='mozna';
					else document.getElementById("demo").innerHTML='nie';
				}
				document.getElementById("demo").innerHTML=changeweather();;
				out += 'Czy można lowic: <b>' +changeweather()+'</b>';
				console.log(data);
			$('#weather').html(out);
		});
	}
