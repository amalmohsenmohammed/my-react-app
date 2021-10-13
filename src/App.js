
 import './App.css';
 import {Switch,Route,} from "react-router-dom";
import SingleRoom from './pages/SingleRoom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
      <Route  exact path="/" component={Home}/>
      <Route   exact path="/rooms/" component={Rooms}/>
      <Route   exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
    </div>
  );
}

export default App;
