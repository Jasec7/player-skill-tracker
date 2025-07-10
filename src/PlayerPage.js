import React, {useEffect, useState} from "react";
import PlayerList from "./PlayerList"


function PlayerPage(){
 const [players, setPlayers] = useState([]);

 // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetch("http://localhost:3001/players")
    .then(r => r.json())
    .then(players => setPlayers(players))
  },[])

 
  return (
    <div className="App">
      <PlayerList players={players} />
      </div>

        )
    }

    export default PlayerPage
       