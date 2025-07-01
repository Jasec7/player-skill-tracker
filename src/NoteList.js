import React from 'react';
import NoteDisplay from './NoteDisplay'

function NoteList({notes, onDelete}){
    return(
        <div>
            {notes.map((note) => (
                <NoteDisplay 
                key={note.id}
                id={note.id}  
                playerId={note.playerId} 
                scout={note.scout} 
                comment={note.comment}
                onDelete={onDelete} />
            ))}
        </div>
    )
}

export default NoteList