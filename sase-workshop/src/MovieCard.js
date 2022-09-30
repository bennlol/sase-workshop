function MovieCard({movie}){
    return(
        <div classname="MovieCard">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="movie-image"/>
            <h3 className="movie-title">{movie.title}</h3>
            <div className="movie-subtext"> Rating:{movie.vote_average}</div>
            <div className="movie-subtext"> Release:{movie.release_date}</div>
            <div className="movie-subtext">Overview{movie.overview}</div>
        </div>
    )
}

export default MovieCard