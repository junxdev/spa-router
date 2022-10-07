import './App.css';
import { About } from './page/About';
import { Root } from './page/Root';
import { Route, Router } from './router/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={<Root/>}/>
        <Route path="/about" component={<About/>} />
      </Router>
    </div>
  );
}

export default App;
