import React from 'react';
import { useQuery } from '@apollo/react-hooks'; 
import { MOVIE_QUERY } from "../query" ;
import {Link} from 'react-router-dom';

const MoviePage = (props) => {
        // uncomment to see which props are passed from router
        //console.log(props)
        // due to we make slug parameter dynamic in route component,
        // urlParameters will look like this { slug: 'slug-of-the-selected-movie' }
        const urlParameters = props.match.params
        const { loading, error, data } = useQuery(MOVIE_QUERY, { 
            variables:{slug:urlParameters.slug}
        });
        if (loading) return <div>Loading</div>
        if (error) return <div>Unexpected Error: {error.message}</div>
      
        return (
            <div className="movie-page">
            <Link to="/" className="back-button" >Main Page</Link>
                {data && data.movie && 
                    <div className="movie-page-box">
                        <img 
                            className="movie-page-image"
                            src={data.movie.posterUrl} 
                            alt={data.movie.name + " poster"} 
                            title={data.movie.name + " poster"} 
                        />
                        <div className="movie-page-info">
                            <h1>{data.movie.name}</h1>
                            <p>Year: {data.movie.year}</p>
                            <br />
                            <p>{data.movie.summary}</p>
                        </div>
                    </div>
                }
       </div>
        )
    }
export default MoviePage;