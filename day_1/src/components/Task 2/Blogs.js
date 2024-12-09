import React, { useState, useMemo, useCallback } from "react";
import Blog from "./Blog";
import { posts } from "./Data";

const Blogs = () => {
	const [selectedCategory, setSelectedCategory] = useState("all");

	const filteredPosts = useMemo(() => {
		// console.log("filteredPosts rendered...");
		return selectedCategory === "all"
			? posts
			: posts.filter((post) => post.category === selectedCategory);
	}, [selectedCategory]);

	const handleCategoryChange = useCallback((event) => {
		// console.log("handleCategoryChange rendered...");
		setSelectedCategory(event.target.value);
	}, []);

	return (
		<div className="container">
			<div style={{ textAlign: "center", paddingTop: 60 }}>
				<h1>Task 2</h1>
				<p>
					Optimize a blog post viewer with useMemo and useCallback. Filter posts
					by category and avoid unnecessary re-renders for large datasets.
				</p>
			</div>
			<div>
				<h3>Filter by Category: </h3>
				<select
					id="category-filter"
					value={selectedCategory}
					onChange={handleCategoryChange}>
					<option value="all">All</option>
					<option value="tech">Technology</option>
					<option value="lifestyle">Lifestyle</option>
					<option value="education">Education</option>
					<option value="science">Science</option>
					<option value="sports">Sports</option>
					<option value="entertainment">Entertainment</option>
					<option value="business">Business</option>
					<option value="health">Health</option>
				</select>
			</div>
			<div className="row justify-content-center">
				{filteredPosts.map((post) => (
					<div className="col-md-3" key={post.id} style={{ margin: 20 }}>
						<Blog post={post} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Blogs;
