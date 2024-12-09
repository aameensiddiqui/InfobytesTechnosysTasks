import React from "react";

const Blog = React.memo(({ post }) => {
	return (
		<div
			className="card"
			style={{
				width: "18rem",
				padding: 10,
				backgroundColor: "rgb(224, 224, 255)",
			}}>
			<div className="card-body">
				<h5 className="card-title">{post.title}</h5>
				<p className="card-text">{post.content}</p>
				<h6 className="card-subtitle mb-2 text-body-secondary">
					Category: {post.category}
				</h6>
			</div>
		</div>
	);
});

export default Blog;
