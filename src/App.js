import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './component/Header/Header';
import { Pomodoro } from './component/Pomodoro/Pomodoro';




function App() {

  return (
    <div className="App">
      <Header/>
      <Pomodoro />    
    </div>
  );
}

export default App;
