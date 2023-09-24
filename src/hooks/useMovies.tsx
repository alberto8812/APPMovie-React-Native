import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interface/movieInterface';

export const useMovies = () => {

    const [IsLoading, setIsLoading] = useState(true)
    const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);

    const getMovies= async() => {
        const response = await movieDB.get<MovieDBNowPlaying>('now_playing');
        const Movies= response.data.results;
        setMoviesInCinema(Movies);
        setIsLoading(false);
    };


    useEffect(() => {
        getMovies();
      }, [])
      
  return {
    moviesInCinema,
    IsLoading
    
  }
}
