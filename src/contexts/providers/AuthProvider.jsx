import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	// All the required variables
	const [user, setUser] = useState(null);
	const auth = getAuth(app);

	// Create user with email and password
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Log in user with email and password
	const loginUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Log out user
	const logOutUser = () => {
		return signOut(auth);
	};

	// Checking if the user is already logged in
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			if (loggedUser) {
				setUser(loggedUser);
			}
		});
		return () => {
			return unsubscribe;
		};
	}, []);

	const authInfo = { createUser, loginUser, user, setUser, logOutUser };
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
