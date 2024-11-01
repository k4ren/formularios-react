import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')
    
    const data = new FormData(form.current)
    const {title, description, state} = Object.fromEntries([...data.entries()])
    if (!title.trim() || description.trim() || state.trim()) {
      return setError('llena este campo');
    }
    console.log(title, description, state)
    
    
    
  };
  return (
    <form
      onSubmit={handleSubmit}
      ref={form}
    >
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="title"
        defaultValue='todo #o1'
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion" 
        name="description"
        defaultValue='descripcion'
      ></textarea>
      <select
        className="form-select mb-2" defaultValue='completado'
        name="state"
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
      {error !== '' && error }
    </form>
  );
};

export default NoControlado;
