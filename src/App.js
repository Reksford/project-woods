import './App.css';
import { Route } from 'react-router-dom';
import Fishing from './pages/GoFishing';
import Highscore from './pages/Highscore';


function App() {
  //need routes 'fishing', 'scores'
  return (
    <div className="App">
      <Route path='/' exact component={Fishing} />
      <Route path='/fishing' component={Fishing} />
      <Route path='/scores' component={Highscore} />
    </div>
  );
}

export default App;
