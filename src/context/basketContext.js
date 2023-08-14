import { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();



const BasketProvider = ({ children }) => {
	const [items, setItems] = useState([]);


	useEffect(() => {
	
	}, [items]);

	const addToBasket = () => {

		
	};

	const removeFromBasket = (item_id) => {
		
    
	};

	const emptyBasket = () => setItems([]);

	const values = {
		items,
		setItems,
		addToBasket,
		removeFromBasket,
		emptyBasket,
	};

	return (
		<BasketContext.Provider value={values}>{children}</BasketContext.Provider>
	);
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };