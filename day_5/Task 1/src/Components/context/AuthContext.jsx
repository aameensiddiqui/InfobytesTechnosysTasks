/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const storedUser = localStorage.getItem("auth");
		return storedUser ? JSON.parse(storedUser) : null;
	});

	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("auth", JSON.stringify(userData));
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("auth");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("something wrong with useAuth or AuthProvider.........");
	}
	return context;
};
