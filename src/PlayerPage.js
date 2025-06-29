import React, {useEffect, useState} from "react";
import PlayerCard from "./PlayerCard"

function PlayerPage(){
 const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log("fetched:", players)
    fetch("http://localhost:3001/players")
    .then(r => r.json())
    .then(players => console.log(players))
  },[])

  if(!players){
    return <h1>Loading...</h1>
  };
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <PlayerCard players={players} />
      </div>

        )
    }

    export default PlayerPage
       