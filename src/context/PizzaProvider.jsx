import { createContext, useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Creación del context
export const PizzasContext = createContext();

// Provider con la fuente de datos
// eslint-disable-next-line react/prop-types
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pizza, setPizza] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  // Obtener las pizzas
  const getPizzas = async () => {
    const res = await fetch(`${API_BASE_URL}/pizzas`);
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

  const getPizza = async (id) => {
    const res = await fetch(`${API_BASE_URL}/pizzas/${id}`);
    const pizza = await res.json();
    setPizza(pizza);
  };

  // Funciones para el carro
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <PizzasContext.Provider
      value={{
        pizzas,
        carrito,
        setCarrito,
        addToCart,
        increment,
        decrement,
        getPizza,
        pizza,
        total,
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
