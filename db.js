import fetch from "node-fetch";
const API_URL="https://yts.am/api/v2/list_movies.json";
const SUGGESTION_URL="https://yts.lt/api/v2/movie_suggestions.json?movie_id=";
const DETAIL_URL = "https://yts.lt/api/v2/movie_details.json?movie_id=";

export const getMovies = (limit, rating) => {
   const hi =  fetch(`${API_URL}`).then(res => res.json()).then(json=>json.data.movies);
   console.log(hi);
   return hi;
}

export const getSuggestions = (id ) => {
   const hi = fetch(`${SUGGESTION_URL}${id}`).then(res => res.json()).then(json=>json.data.movies);
    return hi;
    
}
export const getMovie = (id) =>{
    const hi = fetch(`${DETAIL_URL}${id}`).then(res => res.json()).then(json=>json.data.movie);
    return hi;
}