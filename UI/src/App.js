import './App.css';
import ExerciseOne from './components/ExrciseOne/exerciseOne'
import ExerciseTwo from './components/ExerciseTwo/exerciseTwo'
import ExerciseFour from './components/ExerciseFour/exerciseFour'

function App() {
  return (
    <div className="App">

      <h1>
        Desafio Kukac Andreia Cabral da Costa.
      </h1>

      <h2>Exercicio 1</h2>
      <ExerciseOne/>

      <h2>Exercicio 2</h2>
      <ExerciseTwo/>

      <h2>Exercicio 4</h2>
      <ExerciseFour/>


    </div>
  );
}

export default App;
