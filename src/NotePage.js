import React, {useEffect, useState} from "react";
import NoteList from "./NoteList";
import { useParams } from "react-router-dom";
import NoteForm from "./NoteForm";

function NotePage(){
 const [notes, setNotes] = useState([]);
 const params = useParams();
 const playerId = params.id;

 useEffect(() => {
    fetch("http://localhost:3001/notes")
    .then(r => r.json())
    .then(notes => setNotes(notes))
 },[playerId])

 function handleAddNote(newNote){
   setNotes([...notes, newNote])
 };

 const playerNotes = notes.filter(note => note.playerId === parseInt(playerId));

 const handleDelete = (id) => {
   fetch(`http://localhost:3001/notes/${id}`,{
      method:"DELETE"
   })
   .then(() => {
      const deleteNote = notes.filter((note) => note.playerId !== id);
      setNotes(deleteNote)
   })
 }

    return(
        <div>
          <NoteForm onAddNote={handleAddNote} playerId={playerId} onDelete={handleDelete}/>
          <NoteList notes={playerNotes} />
         </div>
    )
}

export default NotePage