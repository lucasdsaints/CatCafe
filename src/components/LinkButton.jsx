import { Link } from "react-router-dom";

import "./LinkButton.scss";

export default function LinkButton({ children, to, className, ...props }) {
  return (
  <Link
    className={`custom-link ${className}`} 
    style={{ textDecoration: "none" }}
    to={to}
    {...props}
  >
    {children}
  </Link>
  );
}