import React, {useEffect, useState} from "react";
import PlayerList from "./PlayerList"


function PlayerPage(){
 const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log("fetched:", players)
    fetch("http://localhost:3001/players")
    .then(r => r.json())
    .then(players => setPlayers(players))
  },[])

  if(!players){
    return <h1>Loading...</h1>
  };
  return (
    <div className="App">
      <PlayerList players={players} />
      </div>

        )
    }

    export default PlayerPage
       