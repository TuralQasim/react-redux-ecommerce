import { connect } from "react-redux";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
const Products = lazy(() => import("./pages/Products"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Deleted = lazy(() => import("./pages/Deleted"));
const Latest = lazy(() => import("./pages/Latest"));
const pages = [
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/latest",
    element: <Latest />,
  },
  {
    path: "/deleted",
    element: <Deleted />,
  },
];

function App({ products, dispatch, selectedCategory }) {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((a) =>
        dispatch({
          type: "ADD_PROD",
          payload: a,
        })
      );
  }, [selectedCategory]);
  return (
    <>
      <Header />
      <Routes>
        {pages.map((a) => (
          <Route
            key={a.path}
            path={a.path}
            element={
              <Suspense fallback={<h1>Loading...</h1>}>{a.element}</Suspense>
            }
          />
        ))}
      </Routes>
    </>
  );
}
const t = (a) => a;
export default connect(t)(App);
