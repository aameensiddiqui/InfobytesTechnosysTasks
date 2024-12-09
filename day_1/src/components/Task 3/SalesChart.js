import React, { useMemo, useReducer, useState } from "react";
import { Line } from "react-chartjs-2";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const ACTIONS = {
	ADD_SALE: "ADD_SALE",
};

const initialState = {
	salesData: [100, 200, 150, 300, 350, 550, 90],
};

function salesChartReducer(state, action) {
	switch (action.type) {
		case ACTIONS.ADD_SALE:
			return {
				...state,
				salesData: [...state.salesData, action.payload],
			};
		default:
			return state;
	}
}

const SalesChart = (e) => {
	const [state, dispatch] = useReducer(salesChartReducer, initialState);
	const [inputSale, setInputSale] = useState(0);

	const addSale = () => {
		const newSale = inputSale;
		// const newSale = Math.floor(Math.random() * 500);
		dispatch({ type: ACTIONS.ADD_SALE, payload: newSale });
	};

	const chartData = useMemo(
		() => ({
			labels: state.salesData.map((_, index) => `Day ${index + 1}`),
			datasets: [
				{
					label: "Sales",
					data: state.salesData,
					borderColor: "blue",
					backgroundColor: "rgba(0, 0, 255, 0.2)",
				},
			],
		}),
		[state.salesData]
	);

	return (
		<div className="contaier">
			<h2 style={{ marginBottom: 10 }}>Sales Chart</h2>
			<div
				className="contaier"
				style={{
					display: "flex",
					justifyContent: "center",
				}}>
				<input
					className="form-control"
					style={{
						width: 180,
						marginRight: 10,
						backgroundColor: "rgb(224, 224, 255)",
					}}
					type="number"
					// value={inputSale}
					placeholder="Enter today's sale"
					onChange={(e) => setInputSale(e.target.value)}
				/>
				<button
					type="button"
					disabled={!inputSale}
					className="btn btn-sm btn-primary"
					onClick={addSale}
					style={{ marginBottom: 0 }}>
					Add Sale
				</button>
			</div>
			<div
				className="container"
				style={{
					marginTop: 10,
					height: 230,
					width: 600,
				}}>
				<Line data={chartData} />
			</div>
		</div>
	);
};

export default SalesChart;
