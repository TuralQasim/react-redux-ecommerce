const initalState = {
  products: [],
  favorites: [],
  deleted: [],
  selectedCategory: null,
  favlen: 0,
};
export default function Reducer(state = initalState, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        favlen: state.favlen + 1,
      };
    case "DELETE_PROD":
      return {
        ...state,
        deleted: [...state.deleted, action.payload],
        favorites: [
          ...state.favorites.filter((a) => a.id !== action.payload.id),
        ],
        products: [...state.products.filter((a) => a !== action.payload)],
        favlen: state.favlen - 1,
      };
    case "RESTORE_PROD":
      return {
        ...state,
        deleted: [...state.deleted.filter((a) => a !== action.payload)],
        products: [...state.products, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites.filter((a) => a !== action.payload)],
        favlen: state.favlen - 1,
      };
    case "ADD_PROD":
      return { ...state, products: [...action.payload] };
    case "SELECT_CATEGORY":
      return {
        ...state,

        selectedCategory: action.payload,
      };
    default:
      return state;
  }
}
