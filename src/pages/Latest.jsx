import { connect } from "react-redux";
import Product from "../components/Product";

function Latest({ products }) {
  return (
    <div className="products container">
      {products.slice(-10).map((a) => (
        <Product key={a.id} data={a} />
      ))}
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Latest);
