import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './Components/Login';
import Unauthorised from './Components/Unauthorised';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard/*" element={<PrivateRoute element={<Dashboard />} roles={["admin"]} />} />
          <Route path="/unauthorised" element={<Unauthorised />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
