//3. Create an object named `weatherData` with at least 5 keys representing weather data of 5 countries (e.g., `country`, `temperature`, `humidity`, `windSpeed`, `conditions`). One of the keys should have an array as its value. Then, create a function that accepts this object in a destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

const weatherData = {
    country: "India",
    temperature: 35,
    humidity: 70,
    windSpeed: 15,
    conditions: ["Sunny", "Humidity"]
};

function printWeatherData({ country, temperature, humidity, windSpeed, conditions }) 
{
    console.log(`Country: ${country}`);
    console.log(`Temperature: ${temperature}`);
    console.log(`Humidity: ${humidity}`);
    console.log(`Wind Speed: ${windSpeed}`);
    console.log(`Conditions: ${conditions}`);

    printConditions(conditions);

    printKeys(weatherData);
}

function printConditions(conditions) {
    console.log("conditions:");
    conditions.forEach(condition => console.log(condition));
}

function printWeatherData({ country, temperature, humidity, windSpeed, conditions }) 
{
    console.log("Country:",country);
    console.log("Temperature:",temperature);
    console.log("Humidity:",humidity);
    console.log("Wind Speed:",windSpeed);
    console.log("Conditions:",conditions);
}

printWeatherData(weatherData);
