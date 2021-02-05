import './App.css';
import Timer from './components/Timer.js'
import { Button } from './components/Button.js'

function App() {
  return (
    <div className="App">
      
      <Timer />

      <Button content="Start"/>
      <Button content="Stop"/>
    </div>
  );
}

export default App;
