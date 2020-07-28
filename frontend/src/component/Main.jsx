import React from 'react';
import { useQuery } from '@apollo/react-hooks'; 
import { MOVIE_LIST_QUERY } from "../query" ;
import {Link} from 'react-router-dom';


const MainPage = (props) => {
    const { loading, error, data } = useQuery(MOVIE_LIST_QUERY);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Unexpected Error: {error.message}</div>
    return(
      <div className="main-page">
                  {data && data.movieList &&
                      data.movieList.map(movie => (
                          <div className="movie-card" key={movie.slug}>
                              <img 
                                  className="movie-card-image"
                                  src={movie.posterUrl} 
                                  alt={movie.name + " poster"} 
                                  title={movie.name + " poster"} 
                              />
                              <p className="movie-card-name">{movie.name}</p>
                              <Link to={`/movie/${movie.slug}`} className="movie-card-link" />
                          </div>
                      ))
                  }
              </div>
          )
      }
export default MainPage;