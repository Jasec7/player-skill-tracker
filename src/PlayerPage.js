import React, {useEffect, useState} from "react";
import PlayerList from "./PlayerList"


function PlayerPage(){
 const [players, setPlayers] = useState([]);

 // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/players`)
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
       