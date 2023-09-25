import React, { useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieFull } from '../interface/movieInterface';
import { useEffect } from 'react';
import { Cast, CreditsResponse } from '../interface/creditsInterface';

interface MovieDetails{
 cast:Cast[],
 isLoadin:boolean,
 movieFull?:MovieFull,
}

export const useMovieDetails = (movieId:number) => {
  const [MavoieDetail, setMavoieDetail] = useState<MovieDetails>({
    isLoadin:true,
    movieFull:undefined,
    cast:[]
  });

  const getMovieDetail=async()=>{
    const movieDetailPromise= movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise= movieDB.get<CreditsResponse>(`/${movieId}/credits`);
    
    const [movieDetailResponse,castPromseResponse]=await Promise.all([movieDetailPromise,castPromise]);
 

    setMavoieDetail({
        isLoadin:false,
        movieFull:movieDetailResponse.data,
        cast:castPromseResponse.data.cast
    })
    
  }
  
  useEffect(() => {
    getMovieDetail();
  }, [])
  


    return{
      ...MavoieDetail,
    }
}
