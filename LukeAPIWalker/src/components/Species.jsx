import React from 'react';

const Species = props => {
    const { name, classification, average_height, average_lifespan, language }= props.species;
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li><b>Classification:</b>{classification}</li>
                <li><b>Average Height:</b>{average_height} cm</li>
                <li><b>Average Lifespan:</b>{average_lifespan} years</li>
                <li><b>Language:</b>{language}</li>
                
            </ul>
        </div>
    );
}

export default Species;