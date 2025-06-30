import React from 'react';
import NoteDisplay from './NoteDisplay'

function NoteList({notes}){
    return(
        <div>
            {notes.map((note) => (
                <NoteDisplay 
                key={note.id}  
                playerId={note.playerId} 
                scout={note.scout} 
                comment={note.comment} />
            ))}
        </div>
    )
}

export default NoteList