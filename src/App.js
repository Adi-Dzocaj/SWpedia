import "./App.css";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import People from "./pages/People";
import Films from "./pages/Films";
import Person from "./pages/Person";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/people" element={<People />} />
        <Route path="/person/:index" element={<Person />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </div>
  );
};

export default App;
