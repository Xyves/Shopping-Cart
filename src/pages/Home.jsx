import { NavLink } from "react-router-dom";
import shoppingVector from "../assets/img/shopping-vector.jpg";
export default function Home() {
  return (
    <div className="w-full  flex justify-center text-black bg-main flex-1 items-center">
      <div className="left-side h-full w-1/2">
        <h1 className="text-[#786dff] text-7xl mb-5 word tracking-wide">
          Electro
        </h1>
        <h2 className="text-blue-600 text-4xl mb-4">
          Shop Smarter, Not Harder
        </h2>
        <NavLink to="/shop">
          <button className="py-3 px-5 bg-purple-300 rounded-lg text-white">
            Shop now
          </button>
        </NavLink>
      </div>
      <div className="image w-1/3">
        <img src={shoppingVector} alt="shopping woman" />
      </div>
    </div>
  );
}
