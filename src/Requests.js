const API_KEY ="67d7a51db285feb1d2606724117d03c9";

//endpoints
// cada endpoint es un genero 

const requests = {
    fetchTrending:`trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/all/week?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`trending/all/week?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`trending/all/week?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`trending/all/week?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`trending/all/week?api_key=${API_KEY}&with_genres=99`,

};