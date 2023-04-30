import { useState } from "react";
import { connect } from "react-redux";
function Filter({ products, selectedCategory, dispatch }) {
  const cat = new Array(...new Set(products.map((a) => a.category)));
  const [catactive, setcatactive] = useState(false);
  const forActive = (e) => {
    dispatch({
      type: "SELECT_CATEGORY",
      payload: e.target.textContent,
    });
  };

  return (
    <div className="filter container">
      <ul>
        {cat.map((a) => (
          <li
            onClick={forActive}
            className={selectedCategory == a ? "active" : ""}
            key={a}
          >
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Filter);
