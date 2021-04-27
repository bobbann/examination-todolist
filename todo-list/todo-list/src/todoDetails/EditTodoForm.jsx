import React from "react";

const EditTodoForm = (props) => {
    const {todo, onCancel, onSave} = props;
    return (
        /* Formulär för att ändra todo */
        <form id="todo-form">
            <h2>Edit todo</h2>
            <label>Title</label>
            <input name="title" required value={todo.title} />
            <label>Description</label>
            <textarea name="description" rows="3">{todo.description}</textarea
            ><br />
            <button type="button" className="link-button" onClick={onCancel}>Cancel</button>
            <button type="button" className="primary" onClick={onSave}>Save</button>
        </form>
    );
};

export default EditTodoForm;