import Search from "./components/Search";
import './App.css';
import { useState, useEffect } from 'react';
import { Router, navigate } from '@reach/router'
import  Display  from "./views/Display";


function App() {
  const [searchParams, setSearchParams] = useState({
    category: 'people',
    id: '',
  });

  const [data, setData] = useState({});


  const changeHandler = e => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    })
  };

  const submitHandler = e => {
    const {category, id }= searchParams;
    e.preventDefault();
    navigate(`/${category}/${id}`);

  };


  return (
    <div className="container">
      <Search searchParams = {searchParams} changeHandler={changeHandler} submitHandler={submitHandler}/>
      <Router>
        <Display path = "/:category/:id"/>
      </Router>
    </div>
  );
}

export default App;
