import React, {useEffect, useState} from "react";
import NoteList from "./NoteList";

function NotePage(){
 const [notes, setNotes] = useState([]);

 useEffect(() => {
    fetch("http://localhost:3001/notes")
    .then(r => r.json())
    .then(notes => console.log(notes))
 },[])

    return(
        <div>
          <NoteList notes={notes} />
         </div>
    )
}

export default NotePage