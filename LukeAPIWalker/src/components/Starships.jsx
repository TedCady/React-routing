import React from 'react';

const Starships = props => {
    const { name, crew, cargo_capacity, manufacturer }= props.starships;
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li><b>Crew:</b>{crew}</li>
                <li><b>Cargo Capacity:</b>{cargo_capacity}</li>
                <li><b>Manufacturer:</b>{manufacturer}</li>

                
            </ul>
        </div>
    );
}

export default Starships;