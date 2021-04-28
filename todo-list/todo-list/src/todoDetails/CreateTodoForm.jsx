import React, { useState } from "react";
import todoService from "../api/todoService";



const CreateTodoForm = (props) => {
    const { onCancel, onSave } = props;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    /* Disabla save knapp om title eller description inte är ifyllt */
    const isValid = title !== "" && description !== "";

    /* Sätter upp en ny person o skickar uppåt */
    const handleSave = async () => {
        if (isValid && props.onSave) {
            const newTodo = {
                title: title,
                description: description,
            };
            const createdTodo = await todoService.createTodo(newTodo);
            onSave(createdTodo);
        }
    };

    return (
        /* Formulär för att skapa todo */
        <form id="todo-form">
            <h2>Create todo</h2>
            <label>Title</label>
            <input name="title" required value={title} onChange={(event) => setTitle(event.target.value)} />
            <label>Description</label>
            <textarea name="description" value={description} rows="3" onChange={(event) => setDescription(event.target.value)}>Todo Description</textarea>
            <br />
            <button type="button" className="link-button" onClick={onCancel}>Cancel</button>
            <button type="button" className="primary" onClick={handleSave} disabled={!isValid} >Save</button>
        </form>
    );
};

export default CreateTodoForm;