import Product from "./Product";

const Home = () => {
    return (
        <div className="container text-center my-5 p-5" >
            <h1 className="text-success">Products</h1>
            <Product />
        </div>
    );
};

export default Home;
