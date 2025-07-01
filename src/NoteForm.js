import React, {useState} from "react";

function NoteForm(){
    const [formData, setFormData] = useState({
        scout:"",
        comment:""
    });

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:3001/notes",{
                method:"POST",
                headers:{
                    "Content-Type":"Application/JSON"
                },
                body:JSON.stringify(formData)
            })
            .then(r => r.json())
            .then((newNote) => {console.log(newNote);
                setFormData({scout:"", comment:""})
            })
        }

    return(
        <div className="new-note-form">
            <h2>Feedback</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='scout' placeholder='scout'
                value=""/>
                <input type='text' name='comment' placeholder='comment'
                value=""/>
                <button type='submit'>Add Coment</button> 
            </form>
        </div>

    )
}

export default NoteForm
