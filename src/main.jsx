import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./components/Products/Products.jsx";
import OrderReview from "./components/OrderReview/OrderReview.jsx";
import Login from "./components/Login/Login.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Home from "./components/Home/Home.jsx";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/order",
				element: <Home />,
			},
			{
				path: "/order-review",
				element: <OrderReview />,
			},
			{
				path: "/inventory",
				element: <Inventory />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>
);
