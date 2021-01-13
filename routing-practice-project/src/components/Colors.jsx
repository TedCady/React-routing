import React from 'react';
import { Link } from '@reach/router';

const Colors = props =>{

        return (
            <div>
                <h1 style={{color:props.color1, backgroundColor: props.color2 }}>The word is: {props.word}</h1>
                <Link to = "/home">Home</Link>
            </div>
        );
    
}

export default Colors;