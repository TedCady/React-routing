import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import WrongDroids from '../components/WrongDroids';
import Person from "../components/Person";
import Planet from "../components/Planet";
import Species from "../components/Species";
import Film from "../components/Film";
import Starships from "../components/Starships";
import Vehicle from "../components/Vehicle";

const Display = props => {
    const {category, id} = props;
    const [error, setError] = useState(false);
    const [data, setData] =useState({});
    const [homeWorldId, setHomeWorldId] = useState(null);
    

    useEffect (() => {
        console.log('Happiness')
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        
        .then(response =>{
            console.log("*********", response.data)
            // const {name, height, mass, hair_color, skin_color} = response.data;
            // setData({name, height, mass, hair_color, skin_color, homeworld:""});
            setData(response.data);
            setError(false);
            if (category.toLowerCase() === "people") {
                setHomeWorldId(response.data.homeworld.slice(29).slice(0,-1));
            }
                
            
        })
        .catch(err => setError(true));
    }, [category, id])
    return (
        <div>
            {
                error ?
                <WrongDroids/>
                : category.toLowerCase() === 'people' ?
                <Person person={data} homeWorldId={homeWorldId}/>
                : category.toLowerCase() === "planets" ?
                <Planet planet={data}/>
                : category.toLowerCase() === "starships" ?
                <Starships starships={data}/>
                : category.toLowerCase() === "species" ?
                <Species species={data}/>
                : category.toLowerCase() === "films" ?
                <Film film={data}/>
                : category.toLowerCase() === "vehicles" ?
                <Vehicle vehicle={data}/>
                :''
            }
            
        </div>
        


    )
}

export default Display;