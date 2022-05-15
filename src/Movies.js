import React, {useState, useRef} from 'react';
import Movie from './Movie';
import OrderByAlphaButton from './OrderByAlphaButton';
import SaveMoviesButton from './SaveMoviesButton';
import OrderByRatingButton from './OrderByRatingButton';

export default function Movies(){
    const [movies, setMovies] = useState([]);

    const titleRef = useRef();
    const ratingRef = useRef();

    function addMovie() {
        if (!titleRef.current.value > 0)
        {
            window.alert("Du måste fylla i en titel.");
        } else if (ratingRef.current.value == 0){
            window.alert("Du måste fylla i ett betyg.");
        } else {
            let movieId;
            // Sort movies according to id, to be able to get the next id 
            if (movies.length > 0) {
                const sortedMoviesById = [...movies].sort((a,b) => {
                    return a.id > b.id ? 1 : -1
                });
                movieId = sortedMoviesById[sortedMoviesById.length - 1].id + 1;
            } else {
                movieId = 1;
            }
            setMovies([...movies, {
                id: movieId,
                title: titleRef.current.value,
                rating: ratingRef.current.value
            }])

            titleRef.current.value = "";
            ratingRef.current.value = "";
        }
    }

    function deleteMovie(id) {
        setMovies(movies.filter( (item) => item.id !== id));
    }

    function sortMoviesAlpha() {
        const sortedMoviesByAlpha = [...movies].sort((a,b) => {
            return a.title > b.title ? 1 : -1
        });
        setMovies(sortedMoviesByAlpha);
    }

    function sortMoviesRating() {
        const sortedMoviesByRating = [...movies].sort((a,b) => {
            return a.rating > b.rating ? -1 : 1
        });
        setMovies(sortedMoviesByRating);
    }


    return(
        <div>
            <legend>Lägg till en film</legend>
            <hr/>

            <label for="title-field">Titel:</label>
            <input  type="text" id="title-field" className="form-control" ref={titleRef} placeholder="Titel här..." />
            <label for="rating-field">Betyg:</label>
            <select type="text" id="rating-field" className="form-control" ref={ratingRef} placeholder="Välj betyg här...">
            <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <SaveMoviesButton addMovie={addMovie}/>

            <h2>Inlagda filmer</h2>
            <ul className="list-group" id="movies">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />) }
            </ul>

            <div>
                <OrderByAlphaButton sortMoviesAlpha={sortMoviesAlpha}/> 
                <OrderByRatingButton sortMoviesRating={sortMoviesRating}/>
            </div>
        </div>
    )

};