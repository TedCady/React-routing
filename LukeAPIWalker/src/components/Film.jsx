import React from 'react';

const Film = props => {
    const { title, director, release_date, episode_id, opening_crawl }= props.film;
    
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                <li><b>Director:</b>{director}</li>
                <li><b>Release Date:</b>{release_date}</li>
                <li><b>Episode:</b>{episode_id}</li>
                <li><b>Opening:</b>
                    <p>{opening_crawl}</p>
                </li>
                
            </ul>
        </div>
    );
}

export default Film;
