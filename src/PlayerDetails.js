import React from "react";

function PlayerDetails({id, name, team, position, image}){
    return(
        <div className="details">
            <h2>{name}</h2>
        </div>

    )
};

export default PlayerDetails