import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ImageWithLoading } from "../components/ImageWithLoading";
import { PizzasContext } from "../context/PizzaProvider";
import { formatNumber } from "../helpers/formatNumber";

const Details = () => {
  const { pizza, addToCart, getPizza } = useContext(PizzasContext);
  const { id } = useParams();

  useEffect(() => {
    const getData = () => {
      getPizza(id);
    };

    getData();
  }, [getPizza, id]);

  if (!pizza) return <p className="text-center my-5">Cargando...</p>;

  return (
    <main className="container mt-5">
      <article className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <ImageWithLoading
              img={pizza.img}
              className="img-fluid rounded-start h-100"
              height={400}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title text-capitalize">{pizza.name}</h5>
              <p className="card-text">{pizza.desc}</p>
              <ul>
                {pizza.ingredients?.map((ingredient, i) => (
                  <li key={i}>&#127829; {ingredient}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-around align-items-center">
                <h4 className="m-0">Precio: ${formatNumber(pizza.price)}</h4>
                <button
                  className="btn btn-dark"
                  onClick={() => addToCart(pizza)}
                >
                  Añadir &#128722;
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
export default Details;
