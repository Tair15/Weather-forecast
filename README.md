# Weather Information Website

This project is a weather information website that provides real-time weather updates based on geographical coordinates or city names. The website includes an interactive map powered by Leaflet, allowing users to click on a location and retrieve detailed weather information.

## Features

- **Interactive Map:** Users can explore the map and click on a location to view the current weather information.
  
- **Search by City:** Enter a city name in the search bar to get weather information for that specific location.

- **Additional Fun Features:**
  - **Anime GIFs:** Click on the "Anime" button to fetch and display a random anime GIF.
  - **Interesting Facts:** Click on the "Interesting Fact" button to fetch and display a random interesting fact.

## APIs Used

1. **OpenWeatherMap API:**
   - Used to retrieve real-time weather information based on latitude and longitude or city name.
   - Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api).

2. **RapidAPI - Fun Facts API:**
   - Utilized to fetch random interesting facts.
   - Requires a RapidAPI key. Sign up and obtain a key at [RapidAPI](https://rapidapi.com).

3. **RapidAPI - Any Anime API:**
   - Used to fetch and display random anime GIFs.
   - Requires a RapidAPI key. Sign up and obtain a key at [RapidAPI](https://rapidapi.com).

## How to Run

1. Clone the repository to your local machine.
2. Open the terminal and navigate to the project directory.
3. Install dependencies by running: `npm install`.
4. Create a `.env` file in the root directory and add your API keys:
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
RAPIDAPI_KEY=your_rapidapi_key

5. Run the server: `node app.js`.
6. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Credits

- This project was developed by Taishanov Taiyr as part of the WEB2 course.

Feel free to explore, contribute, and enhance this project! If you have any questions or suggestions, please open an issue.
