import { Link } from "react-router-dom";

const Products = () => {
    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
        { id: 3, name: "Product C" },
        { id: 4, name: "Product D" },
    ];

    return (
        <div className="container p-5">
            <h1>in Products...</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;