// api key  from TMDB 

// base url of the site 
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
// image url 
const imageBaseUrl = "https://image.tmdb.org/t/p/original";

const fetchDataFromServer = function(url, callback, optionalParam){
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

function sidebar(){
  const genreList = {};
 fetchDataFromServer(`${base_url}/genre/movie/list?api_key=${api_key}&language=it-IT`, function({genres}){
  for(const{ id, name } of genres){
    genreList[id] = name;
  }
  genreLink();
 });

 const sidebarInner = document.createElement("div");
 sidebarInner.innerHTML = html

}

// requests for movies data 
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
};
document.addEventListener("DOMContentLoaded", function() {
  const apiKey = "d78d423f56d4447b1dde96e58bf54216";
  const trendingUrl = `${base_url}/trending/all/week?${api}&language=it-`;

  // Funzione per creare il markup HTML dei film/serie TV
  function createMovieElement(movie) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    const image = document.createElement("img");
    image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    image.alt = movie.title || movie.name;
    image.addEventListener("click", function() {
      // Mostra dettagli del film/serie TV quando si clicca sull'immagine
      alert(`${movie.title || movie.name}\n\n${movie.overview}`);
    });

    movieElement.appendChild(image);

    return movieElement;
  }

  // Funzione per aggiungere i film/serie TV alla pagina
  function addMoviesToPage(movies, containerId) {
    const container = document.getElementById(containerId);

    movies.forEach(movie => {
      const movieElement = createMovieElement(movie);
      container.appendChild(movieElement);
    });
  }

  // Ottieni i film e le serie TV più popolari e aggiungili alla pagina
  fetch(trendingUrl)
    .then(response => response.json())
    .then(data => {
      const trendingMovies = data.results;
      addMoviesToPage(trendingMovies, "home");
    })
    .catch(error => {
      console.error("Errore nella richiesta API:", error);
    });
});
