import './App.css'
import Breadcrumbs from './Components/Breadcrumbs'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Breadcrumbs />
        <Routes>
          <Route path="/*" exact element={<Home />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
