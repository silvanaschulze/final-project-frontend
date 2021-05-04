
import "./styles.css"
import Navbar from "./components/navbar";
import Home from "./components/home"
import { Switch, Route} from "react-router-dom"


const App = () => {

  return (
    <div>
    <Navbar />
  <Switch>
    
    <Route path="/"> 
      <Home />
    </Route>
  
  </Switch>
  </div>)
  }  
  


export default App;
