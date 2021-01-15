import React from 'react';

const Search = props => {
    const { submitHandler, searchParams, changeHandler } = props;
    
    return (
        <form className ="row pt-5" onSubmit={ submitHandler }>
            <div className="col-sm-6">
                <div className="row">
                    <label htmlFor="category" className="col-sm-3">Search for:</label>
                    <select name="category" className="col-sm-8" onChange={changeHandler} value={searchParams.category}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">StarShips</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
            </div>
            <div className="col-sm-1"></div>
                <div className= "col-sm-4">
                    <div className="row" >
                        <div className="col-sm-4 row" style={{height:20 + 'px'}} >
                            <label htmlFor="id" className="col-sm-4">ID:</label>
                            <input type="number" name="id" className="col-sm-8"onChange={changeHandler} value={searchParams.id} />
                        
                        </div>
                    <input type="submit" value="Search" className="col-sm-3 btn btn-primary"/>

                </div>
            </div>
            
        </form>
    )

}

export default Search;