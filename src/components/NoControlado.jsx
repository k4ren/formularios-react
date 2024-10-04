import { useRef } from "react";

const NoControlado = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    console.log(form);
    
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
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
      ></textarea>
      <select
        className="form-select mb-2"
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
    </form>
  );
};

export default NoControlado;
