import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	cartItemsArray: localStorage.getItem("cartItemsArray")
		? JSON.parse(localStorage.getItem("cartItemsArray"))
		: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// add item to the cart
		addToCart(state, action) {
			const itemIndex = state.cartItemsArray.findIndex(
				(item) => item.id === action.payload.id
			);
			if (itemIndex >= 0) {
				state.cartItemsArray[itemIndex].cartQuantity += 1;
				toast.info(
					`${state.cartItemsArray[itemIndex].title.substring(
						0,
						34
					)} added to the cart again`,
					{ position: "bottom-left" }
				);
			} else {
				const tempItem = { ...action.payload, cartQuantity: 1 };
				state.cartItemsArray.push(tempItem);
				toast.success(
					`${action.payload.title.substring(0, 20)}... added to the cart`,
					{
						position: "bottom-left",
					}
				);
			}
			localStorage.setItem(
				"cartItemsArray",
				JSON.stringify(state.cartItemsArray)
			);
		},

		// decrease item from cart
		decreaseCartItem(state, action) {
			const itemIndex = state.cartItemsArray.findIndex(
				(item) => item.id === action.payload.id
			);

			if (state.cartItemsArray[itemIndex].cartQuantity > 1) {
				state.cartItemsArray[itemIndex].cartQuantity -= 1;
				toast.info(
					`${action.payload.title.substring(0, 20)}... decreased by 1`,
					{
						position: "bottom-left",
					}
				);
			} else if (state.cartItemsArray[itemIndex].cartQuantity === 1) {
				const remaining = state.cartItemsArray.filter(
					(cartItem) => cartItem.id !== action.payload.id
				);
				state.cartItemsArray = remaining;
				toast.error(
					`${action.payload.title.substring(0, 20)}... removed from the cart`,
					{
						position: "bottom-left",
					}
				);
				localStorage.setItem(
					"cartItemsArray",
					JSON.stringify(state.cartItemsArray)
				);
			}

			localStorage.setItem(
				"cartItemsArray",
				JSON.stringify(state.cartItemsArray)
			);
		},

		// remove item from cart entirely
		removeFromCart(state, action) {
			const remaining = state.cartItemsArray.filter(
				(cartItem) => cartItem.id !== action.payload.id
			);
			state.cartItemsArray = remaining;
			toast.error(
				`${action.payload.title.substring(0, 20)}... removed from the cart`,
				{
					position: "bottom-left",
				}
			);
			localStorage.setItem(
				"cartItemsArray",
				JSON.stringify(state.cartItemsArray)
			);
		},

		// clear cart completely
		clearCart(state) {
			state.cartItemsArray = [];
			localStorage.setItem(
				"cartItemsArray",
				JSON.stringify(state.cartItemsArray)
			);
			toast.error(`Cart Cleared`, {
				position: "bottom-left",
			});
		},

		// calculating total amount in cart
		getTotal(state) {
			const { quantity, total } = state.cartItemsArray.reduce(
				(cartTotal, cartItem) => {
					const { price, cartQuantity } = cartItem;
					const totalOfOneCartItem = price * cartQuantity;

					cartTotal.total += totalOfOneCartItem;
					cartTotal.quantity += cartQuantity;

					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);
			state.cartTotalQuantity = quantity;
			state.cartTotalAmount = total;
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	decreaseCartItem,
	clearCart,
	getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
