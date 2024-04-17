import { NavLink } from "react-router-dom";
import Home from "./Home";
import Header from "../components/Header";
export default function ErrorPage() {
  return (
    <div>
      <Header />
      <h1>Sorry</h1>
      <h2>We couldn&#39;t find that page</h2>
      <h3>
        Try searching or go to <NavLink to="/">Home</NavLink>
      </h3>
    </div>
  );
}
