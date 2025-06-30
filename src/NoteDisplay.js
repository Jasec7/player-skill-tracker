import React from 'react';

function NoteDisplay({playerId, scout, comment}){
    return(
        <div className="display">
            <p>Scout: {scout}</p>
            <p>Comment: {comment}</p>
        </div>
    )
}

export default NoteDisplay