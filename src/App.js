import './App.css';
import ColorPicker from './ColorPicker';
import ColorPickerInit from './ColorPickerInit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React-Hook</h1>
       <h3>Use State</h3>
       <ColorPicker />
       <h3>Initialize Use State</h3>
       <ColorPickerInit />
      </header>
   </div>
    
  );
}

export default App;
