import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addToCart, clearCart, decreaseCartItem, getTotal, removeFromCart } from "./redux/cart/cartSlice";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addToCart(item));
    };
    const handleRemoveItem = (item) => {
        dispatch(decreaseCartItem(item));
    };
    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch]);

    return (
        <div className="container" style={{ marginTop: 100 }}>
            <h1 className="text-center my-5 text-success">Your Shopping Cart</h1>
            {cart.cartItemsArray.length > 0 ? (
                <>
                    <table className="table table-hover text-center align-middle">
                        <thead className="table-success">
                            <tr>
                                <th scope="col"><h4>Products</h4></th>
                                <th scope="col"><h4>Price</h4></th>
                                <th scope="col"><h4>Quantity</h4></th>
                                <th scope="col"><h4>Total</h4></th>
                            </tr>
                        </thead>
                        {cart.cartItemsArray?.map((item) => (
                            <tbody key={item.id}>
                                <tr>
                                    <td>
                                        <img
                                            src={`${item.image}`}
                                            alt="Product"
                                            style={{ height: "200px", width: "200px", padding: 30 }}
                                        />
                                        <p>{item.title.substring(0, 37)}...</p>
                                        <button className="btn btn-dark btn-sm" onClick={() => handleRemove(item)}>
                                            Remove
                                        </button>
                                    </td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button
                                            className="btn btn-light btn-sm"
                                            onClick={() => handleRemoveItem(item)}
                                        >
                                            -
                                        </button>
                                        <span>{item.cartQuantity}</span>
                                        <button
                                            className="btn btn-light btn-sm"
                                            onClick={() => handleAddItem(item)}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>${(item.cartQuantity * item.price).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <button className="btn btn-danger" onClick={handleClearCart}>
                            Clear Cart
                        </button>
                        <div className="text-end m-5">
                            <h4 className="fw-bold">Subtotal:</h4>
                            <h3 className="text-primary">${cart.cartTotalAmount.toFixed(2)}</h3>
                            <button className="btn btn-primary" onClick={handleClearCart}><a className="nav-link active" aria-current="page" href="/">Check out</a></button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center text-success">
                    <h4>Your cart is empty!</h4>
                </div>
            )}
        </div>
    );
}

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

export default Cart

