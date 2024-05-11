import { NavLink } from "react-router-dom";
import shoppingVector from "../assets/img/shopping-vector.png";
export default function Home() {
  return (
    <div className="w-full flex-wrap flex justify-center wrap text-black bg-main flex-1 items-center">
      <div className="left-side h-full w-1/2 ">
        <h1 className="text-[#786dff] text-7xl mb-5 word tracking-wide">
          Electro
        </h1>
        <h2 className="text-blue-600 text-4xl mb-4">
          Shop Smarter, Not Harder
        </h2>
        <NavLink to="/shop">
          <button className="py-3 px-5 bg-purple-300 rounded-lg text-black">
            Shop now
          </button>
        </NavLink>
      </div>
      <div className="w-1/3 hidden xl:block ">
        <img src={shoppingVector} alt="shopping woman" className="w-full" />
      </div>
      {/* Responsive classes to handle smaller screen sizes */}
      <div className="w-full block xl:hidden mt-4 h-64">
        <img
          src={shoppingVector}
          alt="shopping woman"
          className="w-full max-h-full"
        />
      </div>
    </div>
  );
}
