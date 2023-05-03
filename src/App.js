import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by D.Sen and is <a href='https://github.com/dsen12/react-dictionary-app' target='_blank' rel="noreferrer">open-sourced on GitHub.</a> 
        </footer>
      </div>
    </div>
  );
}

export default App;
