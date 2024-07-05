//3. Create an object named `weatherData` with at least 5 keys representing weather data of 5 countries (e.g., `country`, `temperature`, `humidity`, `windSpeed`, `conditions`). One of the keys should have an array as its value. Then, create a function that accepts this object in a destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

const weatherData = [
    {
        country: "India",
        temperature: [29,30,28],
        humidity: 84,
        windSpeed: 14,
        conditions: "haze"
    },
    {
        country: "China",
        temperature: [33,31,34],
        humidity: 79,
        windSpeed: 11,
        conditions: "Scatterd showers"
    },
    {
        country: "Singapore",
        temperature: [29,28,27],
        humidity: 83,
        windSpeed: 4,
        conditions: "Extremely Humid"
    },
    {
        country: "Japan",
        temperature: [35,32,33],
        humidity: 86,
        windSpeed: 5,
        conditions: "Clear"
    },
    {
        country: "Sri Lanka",
        temperature: [29,27,28],
        humidity: 91,
        windSpeed: 11,
        conditions: "Thundershower"
    }

]

function show(temperature)
{
    console.log(temperature)
}

function sort({country,temperature,humidity,windSpeed,conditions})
{
    console.log(country);
    console.log(temperature);
    console.log(humidity);
    console.log(windSpeed);
    console.log(conditions);

    show(temperature);
}

function weatherinfo(weatherData)
{

    weatherData.forEach((item) => {
        sort(item);
    });

}


function print(weatherData)
{
    weatherData.forEach((item)=>{
        console.log(item.country);
        console.log(item.temperature);
        console.log(item.humidity);
        console.log(item.windSpeed);
        console.log(item.conditions);
    })

}

weatherinfo(weatherData);
print(weatherData);