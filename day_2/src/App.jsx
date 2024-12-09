import Navbar from "./Componenets/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NextForm from "./Componenets/Task 1/NextForm";
import SortList from "./Componenets/Task 2/SortList";
import NavWithKeys from "./Componenets/Task 3/NavWithKeys";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NextForm />} />
        <Route path="/drag" element={<SortList />} />
        <Route path="/navkey" element={<NavWithKeys />} />
      </Routes>
    </Router>
  );
}

export default App;
