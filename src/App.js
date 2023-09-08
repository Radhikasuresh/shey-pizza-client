import "./App.css";
import "bootstrap";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route } from "react-router-dom/";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen}></Route>
        <Route path="/cart" exact component={CartScreen}></Route>
        <Route path="/register" exact component={RegisterScreen}></Route>
        <Route path="/login" exact component={LoginScreen}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
