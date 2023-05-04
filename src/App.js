import './App.css';
import Dictionary from "./Dictionary";
import banner from "./images/banner.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={banner}
          width="830px"
            alt="camping"
            className="img-fluid"></img>
          <div className='tagline'>the prerequisite for knowledge is curiosity. and curiosity is growth. never stop learning. never stop growing.</div>
          <div className='heading'>
            <h1>dictionary</h1>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="growth" />
        </main>
        <footer>
          This project was coded by D.Sen and is <a href='https://github.com/dsen12/react-dictionary-app' target='_blank' rel="noreferrer">open-sourced on GitHub.</a> 
        </footer>
      </div>
    </div>
  );
}

export default App;
