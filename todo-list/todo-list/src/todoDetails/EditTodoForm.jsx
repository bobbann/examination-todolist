import React, { useState } from "react";
import todoService from "../api/todoService";

const EditTodoForm = (props) => {
    const { todo, onCancel, onSave } = props;
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const isValid = title !== "" && description !== "";

    //Uppdaterar befintlig person och sparar
    const handleSave = async () => {
        if (isValid && onSave) {
            const updatedTodoInfo = {
                ...todo,
                title: title,
                description: description
            };
            const updatedTodo = await todoService.updateTodo(todo.id, updatedTodoInfo);
            onSave(updatedTodo);
        }
    };

    return (
        /* Formulär för att ändra todo */
        <form id="todo-form">
            <h2>Edit todo</h2>
            <label>Title</label>
            <input name="title" value={todo.title} onChange={(event) => setTitle(event.target.value)} />
            <label>Description</label>
            <textarea name="description" rows="3" onChange={(event) => setDescription(event.target.value)} >{todo.description}</textarea>
            <br />
            <button type="button" className="link-button" onClick={onCancel}>Cancel</button>
            <button disabled={!isValid} type="button" className="primary" onClick={handleSave}>Save</button>
        </form>
    );
};

export default EditTodoForm;