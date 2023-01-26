//import logo from './logo.svg';
import './App.css';
import Ejercicio from './components/Ejercicio';
import Saludos from './components/Saludos';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="App">
      <h1>Primeros pasos con REACT</h1>
      <h2>Bienvenidos </h2>
      <Saludos nombre="Nick" apellidos=" Lopez"/>
      <Ejercicio nombre="Carlos" edad="17" pasatiempo="Arrancar Monte"/>
      <Tarea/>
    </div>
  );
}

export default App;
