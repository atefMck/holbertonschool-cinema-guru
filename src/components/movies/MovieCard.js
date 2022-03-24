import React from 'react';
import './movies.css'
import unAvailable from '../../assets/unavailable.png'
import Tag from './Tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons'

const MovieCard = ({ movie }) => {
    const style = {
        backgroundImage: `url(${movie.imageurls[0]}), url(${unAvailable})`,
    }
    let synopsis = "- Not Available -"
    if (movie.synopsis) { synopsis = movie?.synopsis?.length > 100 ? movie.synopsis.substring(0, 100) + '..' : movie.synopsis }
    return (
        <li className="movie-card">
            <div style={style} alt="" className="movie-image">
                <span className="movie-actions">
                    <FontAwesomeIcon icon={faClock} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
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
