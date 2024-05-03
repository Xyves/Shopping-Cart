import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
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
  console.log(items);

  return (
    <div className="flex justify-center bg-main">
      <div className="grid  justify-items-center gap-5 content-center justify-center shopContainer w-[80%] grid-cols-4	 mb-24">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            desc={item.description}
            rating={item.rating.rate}
            reviews={item.rating.count}
            img={item.image}
          ></ProductCard>
        ))}
        <p>Shop</p>
      </div>
    </div>
  );
}
