import React from 'react';

export default function OrderByRatingButton(props){

    return(
        <div className="float-start button-div">
            <input type="submit" className="btn btn-primary mt-3" value="Betygsordning" onClick={() => {props.sortMoviesRating()}} />
        </div>
    )
};