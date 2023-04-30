import { connect } from "react-redux";
import Product from "../components/Product";

function Favorites({ favorites, products }) {
  return (
    <div className="products container">
      {favorites.length ? (
        favorites.map((b) =>
          products.map((a) => {
            if (a.id === b) {
              return <Product key={a.id} data={a} />;
            }
          })
        )
      ) : (
        <h2>Secilmish yoxdur</h2>
      )}
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Favorites);
