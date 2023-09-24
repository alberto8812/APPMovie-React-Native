import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse } from '../interface/movieInterface';


interface MoviesState{
  nowPlaying: Movie[],
  popular: Movie[],
  topRated: Movie[],
  upComing: Movie[],

}
export const useMovies = () => {

    const [IsLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesSatate] = useState<MoviesState>({
      nowPlaying:[],
      popular: [],
      topRated:[],
      upComing: [],
    });


    const getMovies= async() => {
      const nowplayingPromise   = movieDB.get<MovieDBMoviesResponse>('/now_playing');
      const popularPromise      = movieDB.get<MovieDBMoviesResponse>('/popular');
      const topratedPromise     = movieDB.get<MovieDBMoviesResponse>('/top_rated');
      const upcomingPromise     = movieDB.get<MovieDBMoviesResponse>('/upcoming');

        const response= await Promise.all([nowplayingPromise,popularPromise,topratedPromise,upcomingPromise])
        setMoviesSatate({
          nowPlaying: response[0].data.results,
          popular   : response[1].data.results,
          topRated  : response[2].data.results,
          upComing  : response[3].data.results , 
        })
        setIsLoading(false);
    };


    useEffect(() => {
        getMovies();
      }, [])
      
  return {
  ...moviesState,
    IsLoading,
    
  }
}
