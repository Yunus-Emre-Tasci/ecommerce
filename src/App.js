import "./App.css";
import { BrowserRouter as Router,Routes,Route,Link, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products/Products";


const App=()=>{
  return(
    <Router>
      <div>
        <Navbar/>
        <div id="content">
        <Routes >
          <Route path = "/" element = {<Products/>}/>
          <Route path = "/signin" element = {<Signin/>}/>
          < Route path = "/signup"
          element = {
            <Signup/>
          }
          />
        </Routes>
        </div>
      </div>
    </Router>
  )
}


export default App;








