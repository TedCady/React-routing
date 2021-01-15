import React from 'react';

const Vehicle = props => {
    const {name, model,  passengers, cargo_capacity, manufacturer}= props.vehicle;
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li><b>Model:</b>{model}</li>
                <li><b>Passengers:</b>{passengers}</li>
                <li><b>Cargo Capacity:</b>{cargo_capacity}</li>
                <li><b>Manufacturer:</b>{manufacturer}</li>           
            </ul>
        </div>
    );
}

export default Vehicle;