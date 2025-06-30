import React from "react";
import PlayerDetails from "./PlayerDetails"

function PlayerList({players}){
    return(
        <div className="card">
            {players.map((player) => (
                <PlayerDetails key={player.id} 
                id={player.id} 
                name={player.name} 
                team={player.team} 
                position={player.position}
                image={player.image}/> 
            ))}
        </div>
    );
}

export default PlayerList