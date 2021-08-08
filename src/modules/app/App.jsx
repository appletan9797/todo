import { ToDo } from '../todo/components/ToDo';
import './App.css';
import logo from './logo.svg';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDo></ToDo>
      </header>
    </div>
  );
}

//export default App;
