import React from 'react';

export default function SaveMoviesButton(props){

    return(
        <div>
            <input type="submit" className="btn btn-success mt-3" value="Spara film" onClick={() => {props.addMovie()}} />
        </div>
    )
};