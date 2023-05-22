import Header from "./components/Header/Header";
import OrderSummery from "./components/OrderSummery/OrderSummery";
import Products from "./components/Products/Products";

function App() {
	return (
		<>
			<Header />
			<div className='flex'>
				<Products />
				<OrderSummery />
			</div>
		</>
	);
}

export default App;
