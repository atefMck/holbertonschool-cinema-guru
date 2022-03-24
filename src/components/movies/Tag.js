import React, { useState } from 'react';
import './movies.css'

const Tag = ({ genre, filter = false, genres, setGenres }) => {
    const [selected, setSelected] = useState(false);
    const handleTag = () => {
        if (selected) {
            const newGenres = genres.filter(selectedGenre => selectedGenre !== genre.toLowerCase())
            setGenres(newGenres)
            setSelected(false)
        }
        else {
            const newGenres = [...genres]
            newGenres.push(genre.toLowerCase())
            setGenres(newGenres)
            setSelected(true)
        }
    }
    return (
        <li className={`genre-tag ${selected ? "active-tag" : ""}`} onClick={() => {
            if (filter) handleTag()
        }}>
            {genre}
        </li>
    );
}

export default Tag;
