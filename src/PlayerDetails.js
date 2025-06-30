import React from "react";

function PlayerDetails({id, name, team, position, image}){
    return(
        <div className="details">
            <img src={image}/>
            <h2>{name}</h2>
            <p>Team:{team}</p>
            <p>Position:{position}</p>
            <p>View Performance Notes:</p>


        </div>

    )
};

export default PlayerDetails