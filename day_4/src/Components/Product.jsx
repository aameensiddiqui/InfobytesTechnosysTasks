import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "./Slice/ProductSlice";

function Product() {
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.products);

    const truncateDescription = (description) => {
        if (!description) return "";
        const words = description.split(" ");
        return words.length > 10
            ? words.slice(0, 10).join(" ") + "..."
            : description;
    }

    useEffect(() => {
        dispatch(productsFetch());
    }, [dispatch]);


    return (
        <div>
            {status === "pending..." && <p>Loading...</p>}
            {status === "rejected..." && <p>Error loading products</p>}
            {status === "success!..." && (
                <div className="container my-5">
                    <div className="row">
                        {items.map((item) => (
                            <div className="col-md-4" key={item.id}>
                                <div className="card" style={{ width: "18rem", marginBottom: 30 }} >
                                    <img src={`${item.image}`} className="card-img-top" alt="product" style={{ height: "300px", width: "300px", padding: 30 }} />
                                    <div className="card-body" style={{
                                        backgroundColor: "rgb(231 231 231)"
                                    }}>
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{truncateDescription(item.description)}</p>
                                        {/* <p className="card-text">{item.category}</p> */}
                                        <b className="card-text">${item.price}</b>
                                        <p className="card-text">Rated by: {item.rating.count} people</p>
                                        <p className="card-text">Average Rating: {item.rating.rate} / 5</p>
                                        <button className="btn btn-primary w-100">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Product




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