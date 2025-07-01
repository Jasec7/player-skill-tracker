import React, {useState} from "react";

function NoteForm({onAddNote, playerId}){
    const [formData, setFormData] = useState({
        scout:"",
        comment:""
    });

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:3001/notes",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({ ...formData, playerId: parseInt(playerId) })
            })
            .then(r => r.json())
            .then((newNote) => {onAddNote(newNote);
                setFormData({scout:"", comment:""})
            })
        }

    return(
        <div className="new-note-form">
            <h2>Feedback</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='scout' placeholder='scout'
                value={formData.scout}
                onChange={(e) => setFormData({...formData, scout: e.target.value})}/>
                <input type='text' name='comment' placeholder='comment'
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}/>
                <button type='submit'>Add Coment</button> 
            </form>
        </div>
    )
}

export default NoteForm
