import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Link to='/shop-svetla/'>Home</Link>
      {" | "}
      <Link to='/shop-svetla/contacts'>Contacts</Link>
      <Routes>
        <Route path="/shop-svetla/" element={<Home />} />
        <Route path="/shop-svetla/contacts" element={<Contacts />} />
      </Routes>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
