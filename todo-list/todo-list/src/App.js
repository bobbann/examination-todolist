import logo from './logo.svg';
import './App.css';
import TodoList from './todoList/TodoList';
import TodoDetails from './todoDetails/TodoDetails';
import CreateTodoForm from './todoDetails/CreateTodoForm';
import EditTodoForm from './todoDetails/EditTodoForm';
import { useEffect, useState } from 'react';
import todoService  from "./api/todoService";

const viewModes = {
  view: "view",
  edit: "edit",
  create: "create",
};

function App() {
  const [todo, setTodo] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();
  const [viewMode, setViewMode] = useState(viewModes.create);

  //Visar CreateTodoForm
  const showCreateForm = () => {
    setSelectedTodo(null);
    setViewMode(viewModes.create);
  }

  //Markerar todo och visar detaljvyn
  const selectTodo = (todo) => {
    setSelectedTodo(todo);
    setViewMode(viewModes.view);
  }

  const handleTodoSave = (newTodo) => {
    /* Skapa kopia av todo array + lägga till ny todo*/
    const newArray = [...todo, newTodo];
    setTodo(newArray);
    selectTodo(newTodo);
  }

  //Skapar en kopia av arrayen och loopar igenom tills det kommer till objektet som ska uppdateras
  const handleTodoUpdate = (updatedTodo) => {
    const newArray = todo.slice();
    for(var i = 0; i < newArray.length; i++){
      if(newArray[i].id === updatedTodo.id){
        newArray[i] = updatedTodo;
        break;
      }
    }
    setTodo(newArray);
    selectTodo(updatedTodo);
  }

  const handleTodoDeleted = (deletedTodo) => {
    // Mindre api anrop
    setTodo(todo.filter(todo => todo.id !== deletedTodo.id));
    
    // Mer api anrop
    //getTodos();

    showCreateForm();
  }

  //Hämtar alla todos
  const getTodos = async () => {
    const todos = await todoService.getAll();
    setTodo(todos);
  }

  useEffect( () => {
    getTodos();
  }, []);

  //Rendrerar de olika sektionerna i applikationen
  const renderMainSection = () => {
    if(!selectedTodo || viewMode === viewModes.create){
      return <CreateTodoForm onCancel={() => setViewMode(viewModes.view)} onSave={handleTodoSave}/>
    };
    switch (viewMode) {
      case viewModes.view:
        return <TodoDetails todo={selectedTodo} onEdit={() => setViewMode(viewModes.edit)} onDelete={handleTodoDeleted}/>;
      case viewModes.edit:
        return <EditTodoForm todo={selectedTodo} onCancel={() => setViewMode(viewModes.view)} onSave={handleTodoUpdate} />
        default:
          return null;
    }
  };

  //Todolistan till vänster
  return (
    <main>
      <aside>
        <h1 className="list-title">
          My Todos <button id="button-add-todo" className="primary" onClick={showCreateForm}>
            Add
            </button>
        </h1>
        <TodoList todo={todo} selectedTodo={selectedTodo} onTodoSelected={selectTodo} />
      </aside>
      <section>
        {renderMainSection()}
      </section>
    </main>
  );
}

export default App;
