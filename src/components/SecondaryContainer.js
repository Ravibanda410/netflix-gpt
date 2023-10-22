import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("ssssssss", movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        {/*
      Movielist - popular
        MovieCard * n
      MovieList - Now Playing
      MovieList - Trending
      MovieList - Horror
      */}
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"UpComing Movies"} movies={movies.upComingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
