
import "./styles.css"
import Maps from "./components/map"
import Cards from "./components/cards"
import Navbar from "./components/navbar";

const App = () => {
  return(
    <div className= "App">
      <Cards />
      <Maps />
      <Navbar />
    </div>
  )
}

  

export default App;
