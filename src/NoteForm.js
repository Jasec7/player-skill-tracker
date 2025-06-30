import React, {useEffect, useState} from "react";

function NoteForm(){
    const [formData, setFormData] = useState({
        scout:"",
        comment:""
    });

    function handleSubmit(e){
        e.prentDefault();
    }
    return(

    )
}

export default NoteForm
