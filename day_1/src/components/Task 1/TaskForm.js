import { useReducer } from "react";

function TaskForm() {
	const initialState = {
		name: { value: "", error: "" },
		email: { value: "", error: "" },
		phone: { value: "", error: "" },
		street: { value: "", error: "" },
		city: { value: "", error: "" },
		pin: { value: "", error: "" },
	};

	const [state, dispatch] = useReducer(formReducer, initialState);

	// reducer fun
	function formReducer(state, action) {
		switch (action.type) {
			case "SET_FIELD":
				const { field, value } = action.payload;
				return { ...state, [field]: { value, error: validate(field, value) } };
			default:
				return state;
		}
	}

	// validate fun
	function validate(field, value) {
		switch (field) {
			case "name":
				return value.trim() === "" ? "Name is required." : "";
			case "email":
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
					? ""
					: "Invalid email address.";
			case "phone":
				return /^\d{10}$/.test(value)
					? ""
					: "Phone number must have 10 digits.";
			case "street":
				return value.trim() === "" ? "Street name is required." : "";
			case "city":
				return value.trim() === "" ? "City name is required." : "";
			case "pin":
				return /^\d{6}$/.test(value) ? "" : "Pin code must have 6 digits.";
			default:
				return "";
		}
	}

	// checks if any errors are present or any field is empty
	const hasErrors = Object.values(state).some(
		(field) => field.error || field.value.trim() === ""
	);

	// submit fun
	function handleSubmit(e) {
		e.preventDefault();
		if (hasErrors) {
			alert("Fix the errors in the form");
		} else {
			alert("Form submitted successfully!");
			// console.log(Object.values(state));
		}
	}

	return (
		<div className="container">
			<div style={{ textAlign: "center", paddingTop: 60 }}>
				<h1>Task 1</h1>
				<p>
					Implement a multi-step form using useReducer. Each step (Personal
					Info, Address, Summary) should update a shared state. Validate email
					and phone number.
				</p>
			</div>
			<div style={{ justifyItems: "center" }}>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<input
							style={{ width: 500, backgroundColor: "rgb(224, 224, 255)" }}
							type="text"
							className={`form-control ${state.name.error ? "is-invalid" : ""}`}
							id="name"
							placeholder="Name"
							value={state.name.value}
							onChange={(e) =>
								dispatch({
									type: "SET_FIELD",
									payload: { field: "name", value: e.target.value },
								})
							}
						/>
						{state.name.error && (
							<p className="invalid-feedback">{state.name.error}</p>
						)}
					</div>
					<div className="mb-3">
						<input
							style={{ width: 500, backgroundColor: "rgb(224, 224, 255)" }}
							type="email"
							className={`form-control ${
								state.email.error ? "is-invalid" : ""
							}`}
							id="email"
							placeholder="Email id"
							value={state.email.value}
							onChange={(e) =>
								dispatch({
									type: "SET_FIELD",
									payload: { field: "email", value: e.target.value },
								})
							}
						/>
						{state.email.error && (
							<p className="invalid-feedback">{state.email.error}</p>
						)}
					</div>
					<div className="mb-3">
						<input
							style={{ width: 500, backgroundColor: "rgb(224, 224, 255)" }}
							type="number"
							className={`form-control ${
								state.phone.error ? "is-invalid" : ""
							}`}
							id="phone"
							placeholder="Phone number"
							value={state.phone.value}
							onChange={(e) =>
								dispatch({
									type: "SET_FIELD",
									payload: { field: "phone", value: e.target.value },
								})
							}
						/>
						{state.phone.error && (
							<p className="invalid-feedback">{state.phone.error}</p>
						)}
					</div>
					<div className="mb-3">
						<input
							style={{ width: 500, backgroundColor: "rgb(224, 224, 255)" }}
							type="text"
							className={`form-control ${
								state.street.error ? "is-invalid" : ""
							}`}
							id="street"
							placeholder="Street name"
							value={state.street.value}
							onChange={(e) =>
								dispatch({
									type: "SET_FIELD",
									payload: { field: "street", value: e.target.value },
								})
							}
						/>
						{state.street.error && (
							<p className="invalid-feedback">{state.street.error}</p>
						)}
					</div>
					<div className="mb-3">
						<input
							style={{ width: 500, backgroundColor: "rgb(224, 224, 255)" }}
							type="text"
							className={`form-control ${state.city.error ? "is-invalid" : ""}`}
							id="city"
							placeholder="City name"
							value={state.city.value}
							onChange={(e) =>
								dispatch({
									type: "SET_FIELD",
									payload: { field: "city", value: e.target.value },
								})
							}
						/>
						{state.city.error && (
							<p className="invalid-feedback">{state.city.error}</p>
						)}
					</div>
					<div className="mb-3">
						<input
							style={{ width: 500, backgroundColor: "rgb(224, 224, 255)" }}
							type="number"
							className={`form-control ${state.pin.error ? "is-invalid" : ""}`}
							id="pin"
							placeholder="Pin code"
							value={state.pin.value}
							onChange={(e) =>
								dispatch({
									type: "SET_FIELD",
									payload: { field: "pin", value: e.target.value },
								})
							}
						/>
						{state.pin.error && (
							<p className="invalid-feedback">{state.pin.error}</p>
						)}
					</div>
					<div style={{ textAlign: "center" }}>
						<button
							disabled={hasErrors}
							type="submit"
							className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
			<div className="container">
				<h3
					style={{
						textAlign: "center",
						marginTop: 30,
						justifyItems: "center",
					}}>
					Summary
				</h3>
				<div style={{ textAlign: "left" }}>
					{/* <p>{JSON.stringify(state)}</p> */}
					<table className="table" style={{ textAlign: "center" }}>
						<thead>
							<tr>
								<th scope="col"></th>
								<th scope="col">Values</th>
								<th scope="col">Errors</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Name</th>
								<td style={{ color: "blue" }}>{state.name.value}</td>
								<td style={{ color: "red" }}>{state.name.error}</td>
							</tr>
							<tr>
								<th scope="row">Email</th>
								<td style={{ color: "blue" }}>{state.email.value}</td>
								<td style={{ color: "red" }}>{state.email.error}</td>
							</tr>
							<tr>
								<th scope="row">Phone</th>
								<td style={{ color: "blue" }}>{state.phone.value}</td>
								<td style={{ color: "red" }}>{state.phone.error}</td>
							</tr>
							<tr>
								<th scope="row">Street</th>
								<td style={{ color: "blue" }}>{state.street.value}</td>
								<td style={{ color: "red" }}>{state.street.error}</td>
							</tr>
							<tr>
								<th scope="row">City</th>
								<td style={{ color: "blue" }}>{state.city.value}</td>
								<td style={{ color: "red" }}>{state.city.error}</td>
							</tr>
							<tr>
								<th scope="row">Pin</th>
								<td style={{ color: "blue" }}>{state.pin.value}</td>
								<td style={{ color: "red" }}>{state.pin.error}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default TaskForm;
