import { useReducer, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// action types
const ACTIONS = {
	LOAD_FROM_LS: "LOAD_FROM_LS",
	ADD_TODO: "ADD_TODO",
	DELETE_TODO: "DELETE_TODO",
	EDIT_TODO: "EDIT_TODO",
	TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
};

// reducer function
const todoReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.LOAD_FROM_LS:
			return action.payload;
		case ACTIONS.ADD_TODO:
			return [...state, action.payload];
		case ACTIONS.DELETE_TODO:
			return state.filter((todo) => todo.id !== action.payload);
		case ACTIONS.EDIT_TODO:
			return state.map((todo) =>
				todo.id === action.payload.id ? action.payload : todo
			);
		case ACTIONS.TOGGLE_COMPLETED:
			return state.map((todo) =>
				todo.id === action.payload
					? { ...todo, isCompleted: !todo.isCompleted }
					: todo
			);
		default:
			return state;
	}
};

function ToDoList() {
	const [todo, setTodo] = useState("");
	const [todos, dispatch] = useReducer(todoReducer, []);
	const [showFinished, setShowFinished] = useState(true);

	// loading todos from localStorage
	useEffect(() => {
		const todoString = localStorage.getItem("todos");
		if (todoString) {
			dispatch({ type: ACTIONS.LOAD_FROM_LS, payload: JSON.parse(todoString) });
		}
	}, []);

	// saving todos to localStorage whenever todos change
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	// adding a task
	const handleAdd = () => {
		if (todo.trim().length < 1) return;
		dispatch({
			type: ACTIONS.ADD_TODO,
			payload: { id: uuidv4(), todo: todo.trim(), isCompleted: false },
		});
		setTodo("");
	};

	// deleting a task
	const handleDelete = (id) => {
		dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
	};

	// editing a task
	const handleEdit = (id) => {
		const toEdit = todos.find((item) => item.id === id);
		setTodo(toEdit.todo);
		handleDelete(id);
	};

	// checkbox logic
	const handleCheckbox = (id) => {
		dispatch({ type: ACTIONS.TOGGLE_COMPLETED, payload: id });
	};

	return (
		<div>
			<h2>Add a Todo</h2>
			<div
				className="container"
				style={{
					justifyContent: "center",
					display: "flex",
					marginBottom: 30,
				}}>
				<div>
					<input
						className="form-control"
						onChange={(e) => setTodo(e.target.value)}
						value={todo}
						type="text"
						placeholder="Enter a task"
						style={{
							width: 500,
							marginRight: 10,
							backgroundColor: "rgb(224, 224, 255)",
						}}
					/>
					<button
						style={{ margin: 10 }}
						type="button"
						className="btn btn-primary"
						onClick={handleAdd}
						disabled={todo.trim().length < 1}>
						Save
					</button>
				</div>
			</div>
			<div style={{ marginBottom: 20 }}>
				<input
					id="show"
					onChange={() => setShowFinished(!showFinished)}
					type="checkbox"
					checked={showFinished}
					style={{ marginRight: 10 }}
				/>
				<label htmlFor="show">Show Finished Tasks</label>
			</div>
			<h2 style={{ marginBottom: 20 }}>Your Todos</h2>
			<div
				className="todos"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 10,
				}}>
				{todos.length === 0 && (
					<div
						style={{
							padding: 10,
							backgroundColor: "#f8d7da",
							border: "1px solid #f5c6cb",
							borderRadius: 5,
							color: "#721c24",
						}}>
						No Todos to display
					</div>
				)}
				<table className="table">
					<thead>
						<tr>
							<th>Completed</th>
							<th>Tasks</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{todos.map(
							(item) =>
								(showFinished || !item.isCompleted) && (
									<tr key={item.id}>
										<td style={{ width: "20px" }}>
											<input
												name={item.id}
												onChange={() => handleCheckbox(item.id)}
												type="checkbox"
												className="check"
												checked={item.isCompleted}
											/>
										</td>
										<td
											style={{
												width: "400px",
												whiteSpace: "normal",
												wordWrap: "break-word",
												overflow: "hidden",
												textOverflow: "ellipsis",
												textAlign: "left",
											}}>
											{item.todo}
										</td>
										<td>
											<button
												type="button"
												className="btn btn-sm btn-warning"
												onClick={() => handleEdit(item.id)}>
												Edit
											</button>
											<button
												type="button"
												className="btn btn-sm btn-danger"
												onClick={() => handleDelete(item.id)}
												style={{ marginLeft: "10px" }}>
												Delete
											</button>
										</td>
									</tr>
								)
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ToDoList;
