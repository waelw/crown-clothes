
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    // <Route path="/" component={HomePage}></Route>
    <div>
      <Switch>
        <Route exact path = "/" component={HomePage} />
        <Route exact path = "/shop" component = {ShopPage}></Route>
      </Switch>
    </div>
   
  );
}

export default App;
