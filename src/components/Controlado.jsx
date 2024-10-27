import { useState } from "react";

const Controlado = () => {
  const [todo, setTodo] = useState({
    title: 'todo #1',
    description: 'description #1',
    state: 'pendiente'
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo.title, todo.description, todo.state)
  };
  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        onChange={e => setTodo({...todo, title: e.target.value})}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion" 
        name="description"
        value={todo.description}
        onChange={e => setTodo({...todo, description: e.target.value})}
      ></textarea>
      <select
        className="form-select mb-2"
        name="state"
        value={todo.state}
        onChange={e => setTodo({...todo, state: e.target.value})}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>

      <button
        className="btn btn-primary"
        type="submit"
      >
        Procesar
      </button>
    </form>
  );
};

export default Controlado;
