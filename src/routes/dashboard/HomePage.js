import React, { useEffect, useState } from 'react';
import axios from 'axios'
import MovieCard from '../../components/movies/MovieCard'
import Filter from '../../components/movies/Filter'
import SubmitButton from '../../components/general/SubmitButton'
import debounce from 'lodash/debounce';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);
    const loadMovies = (page) => {
        const params = {
            minYear,
            maxYear,
            genres: genres.join(","),
            sort
        }
        const options = {
            method: 'GET',
            url: 'http://localhost:8000/api/titles/advancedsearch',
            params: { page: page, ...params },
            headers: {
                'x-rapidapi-host': 'ott-details.p.rapidapi.com',
                'x-rapidapi-key': 'f2389abc82msh82ebae30243990ap1076f2jsne0a4dc77ee24'
            }
        };

        axios.request(options).then((response) => {
            console.log(response)
            setMovies(response.data)
        }).catch((error) => {
            console.error(error);
        })
    }
    const debouncedLoadData = (debounce(loadMovies, 1000))
    useEffect(() => {
        debouncedLoadData(page)
    }, [minYear, maxYear, sort, genres, page]);

    return (
        <div className="home-page">
            <Filter movies={movies} setMovies={setMovies} minYear={minYear} setMinYear={setMinYear} maxYear={maxYear} setMaxYear={setMaxYear} sort={sort} setSort={setSort} genres={genres} setGenres={setGenres} />
            <ul className="movies">
                {movies && movies.map((movie) => <MovieCard key={movie.imdbId} movie={movie} />)}
            </ul>
            <SubmitButton label="Load More.." className="load-more" onClick={() => setPage(page + 1)} />
        </div>
    );
}

export default HomePage;
