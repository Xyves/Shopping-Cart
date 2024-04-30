import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
export default function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.escuelajs.co/api/v1/categories/2/products?offset=0&limit=15"
    )
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  console.log(items);

  return (
    <div className="flex justify-center">
      <div className="grid justify-items-center  content-center justify-center shopContainer w-[70%] grid-cols-3	bg-yellow-200">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            desc={item.description}
            img={item.images}
          ></ProductCard>
        ))}
        <p>Shop</p>
      </div>
    </div>
  );
}
