import React from "react";
import todoService from "../api/todoService";

const TodoDetails = (props) => {
    const { todo, onEdit, onDelete } = props;

    const handleDelete = async () => {
        const confirmationResult = window.confirm(`Do you really want to delete ${todo.title}?`);
        // Ta bort todo om confirmationResult är true
        if (confirmationResult) {
            const deletedTodo = await todoService.deleteTodo(todo.id)
            onDelete(deletedTodo);
        }

    }

    //När todon skapades
    const todoDate = new Date(todo.created);
    const createdDate = todoDate.toLocaleDateString() + " " + todoDate.toLocaleTimeString();

    //När todon uppdaterades
    const todoUpdatedDate = new Date(todo.updated);
    const updatedDate = todoUpdatedDate.toLocaleDateString() + " " + todoUpdatedDate.toLocaleTimeString();

    return (
        /* Visningsläge för todo */
        <div className="todo-details" >
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p className="todo-details__date">Created Date: {createdDate}</p>
            <p className="todo-details__date">Updated date: {todo.updated !== undefined ? updatedDate : createdDate}</p> {/* Visar datumet då todon skapades om den inte har uppdaterats*/}
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