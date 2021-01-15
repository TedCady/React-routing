import React from 'react';

const Planet = props => {
    const { name, climate, terrain, surface_water, population }= props.planet;
    return (
        <div>
            <h2>{ name }</h2>
            <ul>
                <li><b>Climate:</b>{ climate }</li>
                <li><b>Terrain:</b>{ terrain }</li>
                <li><b>Surface Water:</b>{ surface_water }</li>
                <li><b>Population:</b>{ population }</li>
                
            </ul>
        </div>
    );
}

export default Planet;
