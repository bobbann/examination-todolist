const apiAdress = "http://localhost:3001/todo";

const todoService = {
    getAll: async () => {
        const response = await fetch(apiAdress);
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        throw new Error({
            status: response.status,
            statusText: response.statusText
        });
    },

    createTodo: async (newTodo) => {
        const response = await fetch(apiAdress, {
            method: "POST", headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo)
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        throw new Error({
            status: response.status,
            statusText: response.statusText
        });
    },

    updateTodo: async (id, updateTodo) => {
        const response = await fetch(`${apiAdress}/${id}`, {
            method: "PUT", headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateTodo)
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        throw new Error({
            status: response.status,
            statusText: response.statusText
        });
    },

    deleteTodo: async (id) => {
        const response = await fetch(`${apiAdress}/${id}`, { method: "DELETE" });
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        throw new Error({
            status: response.status,
            statusText: response.statusText
        });
    }
};

export default todoService;