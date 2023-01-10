import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navContainer}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Order Online</span>
        </Link>

        <div className={classes.navItems}>
          <button className={classes.navButton}>Register</button>
          <button className={classes.navButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
