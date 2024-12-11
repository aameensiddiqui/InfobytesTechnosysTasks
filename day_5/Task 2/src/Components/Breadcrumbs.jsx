import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter((segment) => segment);

    return (
        <div className="container my-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to="/">Home</Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathSegments.length - 1;

                        return (
                            <li
                                key={path} className="breadcrumb-item active"
                                aria-current={isLast ? "page" : undefined}
                            >
                                {isLast ? (
                                    segment.charAt(0).toUpperCase() + segment.slice(1)
                                ) : (
                                    <Link to={path}>
                                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
};
export default Breadcrumb;
