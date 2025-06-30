import React, {useEffect, useState} from "react";
import NoteList from "./NoteList";
import { useParams } from "react-router-dom";

function NotePage(){
 const [notes, setNotes] = useState([]);
 const params = useParams();
 const playerId = params.id;

 useEffect(() => {
    fetch("http://localhost:3001/notes")
    .then(r => r.json())
    .then(notes => setNotes(notes))
 },[playerId])

 const playerNotes = notes.filter(note => note.id === params.id)

    return(
        <div>
          <NoteList notes={playerNotes} />
         </div>
    )
}

export default NotePage