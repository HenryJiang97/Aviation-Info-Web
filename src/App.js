import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Manufacturer from './plane/manufacturer';
import Model from './plane/model';
import Submodel from './plane/submodel';
import plane from './plane/plane';

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
