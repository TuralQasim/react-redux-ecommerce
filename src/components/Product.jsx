import React from "react";
import { connect } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
function Product({ data, favorites, dispatch, deleted }) {
  const inFavorite = favorites.includes(data.id);
  const addfavorite = () => {
    if (!inFavorite) {
      dispatch({
        type: "ADD_FAVORITE",
        payload: data.id,
      });
      return;
    }
    dispatch({
      type: "DELETE_FAVORITE",
      payload: data.id,
    });
  };
  const deleteprod = (data) => {
    dispatch({
      type: "DELETE_PROD",
      payload: data,
    });
  };
  const restoreprod = (data) => {
    dispatch({
      type: "RESTORE_PROD",
      payload: data,
    });
  };
  return (
    <div className="product">
      <img src={data.image} alt="" />
      <h2>{data.title.slice(0, 10) + "..."}</h2>
      <h3>{data.price}</h3>
      {inFavorite && !deleted.includes(data) ? (
        <button onClick={addfavorite}>
          <FaHeart />
        </button>
      ) : (
        <button onClick={addfavorite}>
          <FaRegHeart />
        </button>
      )}
      {!deleted.includes(data) ? (
        <button onClick={() => deleteprod(data)}>Delete</button>
      ) : (
        <button onClick={() => restoreprod(data)}>Restore</button>
      )}
    </div>
  );
}
const t = (a) => a;
export default connect(t)(Product);
