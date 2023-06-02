import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview.jsx";
import Login from "./components/Login/Login.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Shop from "./components/Shop/Shop.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import AuthProvider from "./contexts/providers/AuthProvider.jsx";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Shop />,
				loader: () => fetch("products.json"),
			},
			{
				path: "/order",
				element: <Shop />,
				loader: () => fetch("products.json"),
			},
			{
				path: "/order-review",
				element: <OrderReview />,
				loader: () => fetch("products.json"),
			},
			{
				path: "/inventory",
				element: <Inventory />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/sign-up",
				element: <SignUp />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={routes} />
		</AuthProvider>
	</React.StrictMode>
);
