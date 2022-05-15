import React from 'react';

export default function OrderByAlphaButton(props){

    return(
        <div className="float-start button-div">
            <input type="submit" className="btn btn-primary mt-3" value="Alfabetisk ordning" onClick={() => {props.sortMoviesAlpha()}} />
        </div>
    )
};