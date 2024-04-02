import { useNavigate } from "react-router-dom";
import { formatNumber } from "../helpers/formatNumber";

import PropTypes from "prop-types";
import { ImageWithLoading } from "./ImageWithLoading";

const CardPizza = ({ pizza, addToCart }) => {
  const navigate = useNavigate();

  return (
    <div
      key={pizza.id}
      className="col"
    >
      <div className="card">
        <ImageWithLoading
          img={pizza.img}
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title text-capitalize">Pizza {pizza.name}</h4>
        </div>
        <ul className="list-group list-group-flush">
          <h5 className="lead text-center my-2">Ingredientes:</h5>
          {pizza.ingredients.map((ingredient, i) => (
            <li
              key={i}
              className="list-group-item"
            >
              &#127829; {ingredient}
            </li>
          ))}
        </ul>

        <h3 className="text-center text-dark py-3">
          Precio: ${formatNumber(pizza.price)}
        </h3>

        <div className="d-flex justify-content-around mb-4">
          <button
            to={`pizza/${pizza.id}`}
            className="btn btn-sm btn-outline-dark"
            onClick={() => navigate(`/pizzas/${pizza.id}`)}
          >
            Ver Más &#128064;
          </button>

          <button
            className="btn btn-sm btn-dark"
            onClick={() => addToCart(pizza)}
            // onChange={() => setTotal(pizza.price)}
          >
            Añadir &#128722;
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardPizza;

CardPizza.propTypes = {
  pizza: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};
