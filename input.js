//  © ABHIJITH N T :)
document.getElementById("search_data").addEventListener("click", ()  =>{

    const input_tmdb_id = document.getElementById('movie_id').value;
    let movie_name = document.querySelector('.movie_name');
    let movie_genres = document.querySelector('.movie_genres');
    let movie_reating = document.querySelector('.movie_rating');
    let movie_description = document.querySelector('.movie_description');
    let movie_runtime = document.querySelector('.movie_runtime');
  
    
    const api = `https://api.themoviedb.org/3/movie/${input_tmdb_id}?api_key=31e767f004a68d2ea4e72f31f639f35c&547016`;
    fetch(api)
    .then(response=>{
        return response.json();
    })
     .then(movie_data =>{
        for (let index = 0; index < movie_data.genres.length; index++) {
        // Get the HTML to Movie Genres
        movie_genres.textContent +=  movie_data.genres[index].name + ' ';
        }
        // Get The Output of Movie titiles
        movie_name.textContent = movie_data.original_title;
        // Get the API data from array using for loop for Movie Genres
        // close for loop :)
        // Movie_Rating :)
        movie_reating.textContent = movie_data.vote_average;
        //Push the image src to HTML 
        document.getElementById("movie_poster").src = 'https://image.tmdb.org/t/p/original'+ movie_data.poster_path ;
        // Discription :)
        movie_description.textContent = movie_data.overview;
        //Runtime
        movie_runtime.textContent = movie_data.runtime + ' Minutes';
        document.getElementById('movie_id').value = ' ';


    });

});
