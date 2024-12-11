import {
    Routes,
    Route,
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Products from './Products';
// import Details from './Details';

function Home() {
    return (
        <div className="container p-5">
            <h1>in Home...</h1>

            <Routes>
                <Route path="/about" element={< About />} />
                <Route path="/contact" element={< Contact />} />
                <Route path="/products" element={<Products />} />
                {/* <Route path="/products/details" element={<Details />} /> */}
                <Route path="/login" element={< Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    )
}

export default Home
