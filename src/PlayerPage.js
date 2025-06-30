import React, {useEffect, useState} from "react";
import PlayerList from "./PlayerList"
import NavBar from "./NavBar";

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
      <header>
        <NavBar />
      </header>
      <PlayerList players={players} />
      </div>

        )
    }

    export default PlayerPage
       