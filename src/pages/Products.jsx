import { connect } from "react-redux";
import Filter from "../components/Filter";
import Product from "../components/Product";
function Products({ products, selectedCategory }) {
  const filteredProducts = products.filter(
    (a) => a.category == selectedCategory
  );

  let renderProducts = products.map((a) => {
    return <Product key={a.id} data={a} />;
  });

  if (selectedCategory != null) {
    renderProducts = filteredProducts.map((a) => {
      return <Product key={a.id} data={a} />;
    });
    console.log(renderProducts);
  }

  return (
    <>
      <Filter />
      <div className="products container">{...renderProducts}</div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(Products);
