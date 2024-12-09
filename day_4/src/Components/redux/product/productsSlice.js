import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	items: [],
	status: "idle",
};

export const productsFetch = createAsyncThunk(
	"products/productsFetch",
	async () => {
		const response = await axios.get("https://fakestoreapi.com/products");
		return response?.data;
	}
);

const ProductSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(productsFetch.pending, (state) => {
				state.status = "pending...";
			})
			.addCase(productsFetch.fulfilled, (state, action) => {
				state.status = "success!...";
				state.items = action.payload;
			})
			.addCase(productsFetch.rejected, (state) => {
				state.status = "rejected...";
			});
	},
});

export default ProductSlice.reducer;
