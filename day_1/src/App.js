import Navbar from "./components/Navbar";
import TaskForm from "./components/Task 1/TaskForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./components/Task 2/Blogs";
import Dashboard from "./components/Task 3/Dashboard";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<TaskForm />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
