//import logo from './logo.svg';
import './App.css';
import Ejercicio from './components/Ejercicio';
import Saludos from './components/Saludos';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <br></br>
      <br></br>
      <h1>MI PÁGINA CON REACT</h1>
      <Saludos nombre="Nick" apellidos=" Lopez"/>
      <Ejercicio nombre="Nick" edad="35" pasatiempo="Robar"/>
      <Tarea/>
      </header>
      <body>
      <p></p>
      <p>Hecho por Nick Bryan ®</p>
      </body> 
    </div>

  );
}

export default App;
