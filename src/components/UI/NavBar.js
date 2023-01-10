import classes from "./NavBar.module.css";
import Logo from "../../assets/FoodLogo.png";
import { Fragment } from "react";

const NavBar = () => {
  const imgURL =
    "https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU=";
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.header}>
          <div>Log in</div>
          <div>Sign up</div>
        </div>
        <div className={classes.logo}>
          <img src={Logo} />
        </div>
        <h1>Discover the best food & drinks in Kolkata</h1>
        <div>
          <input className={classes.center} />
        </div>
      </div>

      <div className={classes.items}>
        <div>
          <img src={imgURL} className={classes.foodImage} />
          <div className={classes.card}>
            <div className={classes.container}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>

        <div>
          <img src={imgURL} className={classes.foodImage} />
          <div className={classes.card}>
            <div className={classes.container}>
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
