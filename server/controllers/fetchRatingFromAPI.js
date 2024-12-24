const axios = require('axios');

async function fetchRatingFromAPI(movieName, movieYear) {
    try {
        const apiKey = 'GPTQ8VV-5DA4XNN-QA1FDK4-C29DMF3';
        const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie`, {
            params: { query: movieName, type: 'movie', limit: 10 },
            headers: { 'X-API-KEY': apiKey }
        });

        // Выбор фильма по названию, альтернативному названию и году
        const movieData = response.data?.docs?.find(
            movie => 
                (movie.name === movieName || movie.alternativeName === movieName) &&
                movie.year === movieYear
        );

        if (movieData && movieData.rating && movieData.rating.kp) {
            console.log(`Fetched rating for "${movieName} (${movieYear})": ${movieData.rating.kp}`);
            return movieData.rating.kp;
        } else {
            console.warn(`No exact match found for movie: ${movieName} (${movieYear})`);
            return 0;
        }
    } catch (error) {
        console.error("Error fetching rating:", error);
        return null;
    }
}

module.exports = fetchRatingFromAPI;