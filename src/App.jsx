import Cat from "./components/Cat";
import Controlado from "./components/Controlado";
import NoControlado from "./components/NoControlado";
const App = () => {
  return (
    <div className="container">
      <h1>Formularios</h1>
      {/* <NoControlado /> */}
      <Cat></Cat>
      <Controlado></Controlado>
    </div>
  );
};

export default App;
