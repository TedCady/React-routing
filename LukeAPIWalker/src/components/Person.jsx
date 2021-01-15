import React from 'react';
import {Link} from '@reach/router';

const Person = props => {
    const {name, height, mass, hair_color, skin_color } = props.person;



    return ( 
        <div>
            <h2>{name}</h2>
            <ul>
                <li><b>Height:</b>{height} cm</li>
                <li><b>Mass:</b>{mass} kg</li>
                <li><b>Hair Color:</b>{hair_color}</li>
                <li><b>Skin Color:</b>{skin_color}</li>
                <li><b>Home World:</b> <Link to ={`/planets/${props.homeWorldId}`}>Homeworld</Link></li>
            </ul>
        </div>
    );
}

export default Person;