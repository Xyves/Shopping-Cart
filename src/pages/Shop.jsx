import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import React from "react";
const MemoizedProductCard = React.memo(ProductCard);
export default function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=15")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className=" bg-main">
      <div className="justify-center flex">
        <div className=" sm:grid-cols-2 md:grid-cols-3 grid justify-items-center gap-8 content-center justify-center shopContainer w-[70%] lg:grid-cols-4 mb-24">
          {items.map((item) => (
            <MemoizedProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              desc={item.description}
              rating={item.rating.rate}
              reviews={item.rating.count}
              id={item.id}
              img={item.image}
              quantity={0}
            ></MemoizedProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}
