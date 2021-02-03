import './App.css';
import { Timer } from './components/Timer.js'
import { Button } from './components/Button.js'
import { timerFunction } from './components/timerFunction.js'

function App() {
  return (
    <div className="App">
      
      <Timer hours={timerFunction.getHours()} minutes={timerFunction.getMinutes()} seconds={timerFunction.getSeconds()}/>

      <Button function={timerFunction.startTimer} content="Start"/>
      <Button function={timerFunction.refreshTimer} content="Stop"/>
    </div>
  );
}

export default App;
