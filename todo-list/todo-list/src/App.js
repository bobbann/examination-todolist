import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <aside>
        <h1 className="list-title">
          My Todos <button id="button-add-todo" className="primary">Add</button>
        </h1>

    </aside>
      <section>
        /* Visningsläge för todo */
      <div className="todo-details">
          <h2>Todo title</h2>
          <p>Todo description</p>
          <p className="todo-details__date">Created Date</p>
          <p className="todo-details__date">Updated date</p>
          <button type="button" className="link-button danger">Delete</button>
          <button type="button" className="link-button">Edit</button>
        </div>
      /* Formulär för att skapa todo */
      <form id="todo-form">
          <h2>Edit todo</h2>
          <label>Title</label>
          <input name="title" required value="Todo title" />
          <label>Description</label>
          <textarea name="description" rows="3">Todo Description</textarea
          ><br />
          <button type="button" className="link-button">Cancel</button>
          <button type="button" className="primary">Save</button>
        </form>
    </section>
    </main>
  );
}

export default App;
