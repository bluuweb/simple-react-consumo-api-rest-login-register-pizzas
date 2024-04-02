import { useContext } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import { PizzasContext } from "../context/PizzaProvider";

const Home = () => {
  const { pizzas, addToCart } = useContext(PizzasContext);

  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              pizza={pizza}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
