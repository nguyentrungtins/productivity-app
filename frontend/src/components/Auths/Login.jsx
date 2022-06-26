import React from "react";
import classes from "./Login.module.css";
const Login = () => {
  // console.log(classes);
  return (
    <div className={classes.body__login}>
      <div className={classes.card}>
        <form>
          <h2 className={classes.title}> Log in</h2>
          <p className={classes.subtitle}>
            Don't have an account? <a href="#"> sign Up</a>
          </p>

          <p className={classes.or}>
            <span>or</span>
          </p>

          <div>
            <div className={classes.input__login}>
              <input
                type="text"
                id="username"
                required
                className={classes.input}
                name="email"
              />
              <label className={classes.input__label} htmlFor="username">
                Email
              </label>
            </div>
          </div>

          <div>
            <div className={classes.input__login}>
              <input
                type="text"
                id="password"
                required
                className={classes.input}
                name="password"
              />
              <label className={classes.input__label} htmlFor="password">
                Password
              </label>
            </div>
          </div>

          <button className={classes.cta__btn}>Log In</button>
          <a className={classes.forget__pass} href="#">
            Forgot password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
