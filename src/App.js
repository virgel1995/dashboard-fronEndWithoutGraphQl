import './App.css';
import { Switch , Route } from "react-router-dom"
import { LandingPage , DashboardPage , MenuPage } from "./pages"

function App() {
  return (
  <Switch>
<Route path="/" exact= {true} component = { LandingPage }/>
<Route path="/menu" exact= {true} component = { MenuPage }/>
<Route path="/dashboard" exact= {true} component = { DashboardPage }/>

{/* guild Dashboard link */}
{/* <Route path="/dashboard/:id" exact= {true} component = { DashboardPage }/> */}

  </Switch>
  );
}

export default App;
