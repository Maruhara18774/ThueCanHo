import React from "react";
import Loader from "../paner-form/Loader";
import ProductCard from "../paner-form/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";
import Navbar from "../paner-form/Navbar";

function ListHome() {
  // Create your own Mock API: https://mockapi.io/
  const url = `https://60af7dee5b8c300017dece64.mockapi.io/api/v1/house?page=1&limit=10`;
  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = (
      <div>
        <div className="bg-blue-300 mb-2 p-3">
          If you see this error. Please remember to create your own{" "}
          <a href="https://mockapi.io/">mock API</a>.
        </div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl mb-3">Your Apartments</h1>
        <div className="md:flex flex-wrap md:-mx-3">{content}</div>
      </div>
    </div>
  );
}

export default ListHome;
