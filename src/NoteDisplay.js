import React from 'react';

function NoteDisplay({id, scout, comment, onDelete}){
    return(
        <div className="display">
            <p>Scout: {scout}</p>
            <p>Comment: {comment}</p>
            <button onClick={() => onDelete(id)}>Remove</button>
        </div>
    )
}

export default NoteDisplay