import "./App.css";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import People from "./pages/People";
import Films from "./pages/Films";
import Person from "./pages/Person";
import Film from "./pages/Film";
import Errorpage from "./pages/Errorpage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<Person />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<Film />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
};

export default App;
