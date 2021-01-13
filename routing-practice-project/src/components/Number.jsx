import React from 'react';
import { Link } from '@reach/router';

const Number = props =>{
    
        return (
            <div>
            { isNaN(props.id)? <h1>This is the word: {props.id} </h1> :  <h1>This is the number: {props.id} </h1> } 
                <Link to = "/home">Home</Link>
            </div>
        );
}

export default Number;