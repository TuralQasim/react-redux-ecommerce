import { connect } from "react-redux";
import Product from "../components/Product";

function Deleted({ deleted, products }) {
  return (
    <div className="products container">
      {deleted.length ? (
        deleted.map((a) => <Product key={a.id} data={a} />)
      ) : (
        <h2>Silinmish mehsul yoxdur</h2>
      )}
    </div>
  );
}
const t = (a) => a;
export default connect(t)(Deleted);
