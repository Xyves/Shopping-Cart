import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="text-white text-center text-4xl">
      <h1 className="p-3">Sorry</h1>
      <h2 className="p-3">We couldn&#39;t find that page</h2>
      <h3 className="p-3 ">
        <NavLink to="/">
          <span className="underline text-5xl">Home</span>
        </NavLink>
      </h3>
    </div>
  );
}
