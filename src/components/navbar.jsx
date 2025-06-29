import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav classname="navbar">
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/counter"> Counter </Link>
    </nav>
  );
};

export default Navbar;
