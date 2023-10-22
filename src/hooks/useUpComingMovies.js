import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies, addTopRatedMovies, addUpComingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useUpComingMovies = () => {
  // Fetch data from TMDB API and update Store
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
