import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hourglass } from "react-loader-spinner";
import { addToCart } from "./redux/cart/cartSlice";
import { getTotal } from "./redux/cart/cartSlice"

function Product() {
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.products);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch]);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <div className="container my-5">
            {status === "pending..." && (
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    colors={["#306cce", "#72a1ed"]}
                />
            )}
            {status === "rejected..." && (
                <div className="text-center text-danger">
                    <p>Error loading products. Please try again later.</p>
                </div>
            )}
            {status === "success!..." && (
                <div className="row">
                    {items.map((item) => (
                        <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={`${item.image}`}
                                    className="card-img-top img-fluid"
                                    alt="product"
                                    style={{ height: "300px", objectFit: "contain", padding: 20 }}
                                />
                                <div className="card-body" style={{ backgroundColor: "rgb(245, 245, 245)" }}>
                                    <h5 className="card-title text-truncate">{item.title}</h5>
                                    <p className="card-text fw-bold text-primary mb-2">${item.price.toFixed(2)}</p>
                                    <p className="card-text mb-1">
                                        <small className="text-muted">Rated by {item.rating.count} people</small>
                                    </p>
                                    <p className="card-text mb-3">
                                        <span className="badge bg-success">
                                            {item.rating.rate.toFixed(1)} ★
                                        </span>
                                    </p>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="btn btn-primary w-100"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Product;





/*
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },

*/
