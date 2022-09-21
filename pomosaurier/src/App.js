import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ChangesBeingMadeLandingpage from "./ChangesBeingMadeLandingpage";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ChangesBeingMadeLandingpage />} />
    </Routes>
  </BrowserRouter>;
  return <ChangesBeingMadeLandingpage />;
}

export default App;
