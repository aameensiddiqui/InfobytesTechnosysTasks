import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route,
} from "react-router-dom";
import Theme from './Components/Theme';
import Navbar from './Components/Navbar';
import NotificationsPage from './Components/NotificationPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Theme />} />
        <Route path='/notif' element={<NotificationsPage />} />
      </Routes>
    </Router>
  )
}

export default App
