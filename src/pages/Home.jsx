import devteam from "../assets/img/devteam.jpg";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="w-full  flex justify-center text-white flex-1">
      <div className="left-side h-full w-1/2">
        <h1 className="text-center">Electro</h1>
        <h2>Shop Smarter, Not Harder</h2>
        <NavLink to="/shop">
          <button>Shop now</button>
        </NavLink>
      </div>
      <div className="right-side h-full w-1/2">
        <img src={devteam} alt="Developer team" className="w-1/2 max-h-69" />
      </div>
    </div>
  );
}
