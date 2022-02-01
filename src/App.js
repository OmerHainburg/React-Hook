import './App.css';
import ColorPicker from './ColorPicker';
import ColorPickerInit from './ColorPickerInit';
import PhoneNumber from './PhoneNumber';
//import QuizNavBar from './QuizNavBar';
import GroceryCart from './GroceryCart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>React-Hook</h2>
       <h2>Use State</h2>
       <ColorPicker />
       <h2>Initialize Use State</h2>
       <ColorPickerInit />
       <h2>Use State Setter Outside of JSX</h2>
       <PhoneNumber />
       <h2>Set From Previous State</h2>
       {/* <QuizNavBar /> */}
       <h2>Arrays in State</h2>
       <GroceryCart />
      </header>
   </div>
    
  );
}

export default App;
