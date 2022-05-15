import React from 'react';

export default function Movie(props){

    const stars = [];
    
    for (let i = 0; i < props.item.rating; i++) {
        stars.push(<img src="star.png" alt="Star" className="float-end" ></img>);
      };


    return(
        <li className="list-group-item">
            { props.item.title }
            <img src="delete.png" alt="Delete movie" className="float-end delete-movie-icon" onClick={() => {props.deleteMovie(props.item.id)}}></img>
            { stars }
        </li>
    )

};