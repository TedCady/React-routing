import React from 'react';
import { Link } from '@reach/router';

const Home = props =>{

        return (
            <div>
                <h1>Welcome</h1>
                <Link to = "/:id"></Link>
            </div>
        );
    
};

export default Home;