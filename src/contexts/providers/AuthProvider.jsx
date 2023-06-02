import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
} from "firebase/auth";
import { app } from "../../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const auth = getAuth(app);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Checking if the user is already logged in
	useEffect(() => {
		onAuthStateChanged(auth, (loggedUser) => {
			if (loggedUser) {
				setUser(loggedUser);
			}
		});
	}, []);

	const authInfo = { createUser, user, setUser };
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
