import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Sorry</h1>
      <h2>We couldn&#39;t find that page</h2>
      <h3>
        Try searching or go to <NavLink to="/">Home</NavLink>
      </h3>
    </div>
  );
}
