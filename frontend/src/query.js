import gql from "graphql-tag";

export const MOVIE_LIST_QUERY = gql`
query movieList{
        movieList{
            name, posterUrl, slug
        }
    }
`
export const MOVIE_QUERY = gql`
query movie($slug:String!){
        movie(slug:$slug){
            id, name, year, summary, posterUrl, slug
        }
    }
`
