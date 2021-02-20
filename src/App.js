import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Manufacturer from './Plane/Manufacturer';
import Model from './Plane/Model';
import Submodel from './Plane/Submodel';
import plane from './Plane/Plane';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/aviationinfo" component={Manufacturer}></Route>
        <Route exact path="/aviationinfo/:manfuacturer" component={Model}></Route>
        <Route exact path="/aviationinfo/model/:model" component={Submodel}></Route>
        <Route path="/aviationinfo/submodel/:submodel" component={plane}></Route>
      </Switch>
    </div>
  );
}

export default App;
