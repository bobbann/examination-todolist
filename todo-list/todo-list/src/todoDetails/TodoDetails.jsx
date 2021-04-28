import React from "react";
import todoService from "../api/todoService";

const TodoDetails = (props) => {
    const {todo, onEdit, onDelete} = props;

    const handleDelete = async () => {
        const confirmationResult = window.confirm(`Do you really want to delete ${todo.title}?`);
        // Ta bort todo om confirmationResult är true
        if(confirmationResult){
            const deletedTodo = await todoService.deleteTodo(todo.id)
            onDelete(deletedTodo);
        }

    }

    return (
        /* Visningsläge för todo */
        <div className="todo-details" >
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p className="todo-details__date">Created Date</p>
            <p className="todo-details__date">Updated date</p>
            <button type="button" className="link-button danger" onClick={handleDelete}>
                Delete
                </button>
            <button type="button" className="link-button" onClick={onEdit}>
                Edit
                </button>
        </div >
    );
};

export default TodoDetails;