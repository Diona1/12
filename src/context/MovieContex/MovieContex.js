import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react"
import { initial, reducer } from "../../assets/reducer";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const [movie, setMovie] = useState([]);
    // state for filter #trending
    const [trendingState, trendingDispatch] = useReducer(reducer, initial)
    const [topState, topDispatch] = useReducer(reducer, initial)
    const [upState, upDispatch] = useReducer(reducer, initial)
    const [simState, simDispatch] = useReducer(reducer, initial)

    // Get Single Movie by APi and id
    const getMovie = (url) => {
        try {
            axios.get(url)
                .then((movie) => {
                    setMovie(movie.data)
                });
        } catch (error) {
            console.log("Error in API", error)
        }
    }

    return (
        <MovieContext.Provider
            value={{
                movie,
                getMovie,
                trendingState,
                trendingDispatch,
                topState,
                topDispatch,
                upState,
                upDispatch,
                simState,
                simDispatch
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

// Custom Hook
const useMovieContext = () => {
    return useContext(MovieContext)
}

// Export Context's
export { MovieContext, MovieContextProvider, useMovieContext }