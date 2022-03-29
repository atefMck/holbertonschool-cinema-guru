import React, { useState, useEffect } from 'react';
import './movies.css'
import unAvailable from '../../assets/unavailable.png'
import Tag from './Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const MovieCard = ({ movie, favorites, watchLater, setFavorites, setWatchLater, isFavorite, isWatchLater }) => {
    const [favorite, setFavorite] = useState(favorites.includes(movie.id));
    const [_watchLater, _setWatchLater] = useState(isWatchLater);
    const addMovie = (type) => {
        const accessToken = localStorage.getItem('accessToken')
        axios.post(`http://localhost:8000/api/titles/${type}/${movie.imdbId}`, {}, {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }).then(res => {
            if (type === "favorite") setFavorite(!favorite)
            if (type === "watchLater") _setWatchLater(!_watchLater)
        })
    }

    const removeMovie = (type) => {
        const accessToken = localStorage.getItem('accessToken')
        axios.delete(`http://localhost:8000/api/titles/${type}/${movie.imdbId}`, {}, {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }).then(res => {
            if (type === "favorite") setFavorite(!favorite)
            if (type === "watchLater") _setWatchLater(!_watchLater)
        })
    }

    const style = {
        backgroundImage: `url(${movie.imageurls[0]}), url(${unAvailable})`,
    }
    let synopsis = "- Not Available -"
    if (movie.synopsis) { synopsis = movie?.synopsis?.length > 100 ? movie.synopsis.substring(0, 100) + '..' : movie.synopsis }
    return (
        <li className="movie-card">
            <div style={style} alt="" className="movie-image">
                <span className="movie-actions">
                    <FontAwesomeIcon icon={faClock} className={`icon ${_watchLater ? "watch-later" : ""}`} onClick={() => addMovie('watchLater')} />
                    <FontAwesomeIcon icon={faStar} className={`icon ${favorite ? "favorite" : ""}`} onClick={() => addMovie('favorite')} />
                </span>
                <h1>{movie.title}</h1>
            </div>
            <div>
                <p>{synopsis}</p>
                <ul>
                    {movie.genres.map((genre, idx) => <Tag key={`tag-${idx}`} genre={genre} />)}
                </ul>
            </div>
        </li>
    );
}

export default MovieCard;
