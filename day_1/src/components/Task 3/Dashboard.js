import React from "react";
import SalesChart from "./SalesChart";
import ToDoList from "./ToDoList";

function Dashboard() {
	return (
		<div style={{ textAlign: "center", marginTop: 60 }}>
			<h1>Task 3</h1>
			<p>
				Build a dashboard with widgets (e.g., sales chart, to-do list) managed
				by useReducer and memoized calculations for chart rendering.
			</p>
			<div className="container-fluid p-5">
				<div className="row">
					<div className="col-md-7">
						<div className="card">
							<div className="card-body">
								<ToDoList />
							</div>
						</div>
					</div>
					<div className="col-md-5">
						<div className="card">
							<div className="card-body">
								<SalesChart />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
