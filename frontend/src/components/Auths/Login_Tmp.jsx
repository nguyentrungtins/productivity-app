import React from "react";
import classes from "./Login_Tmp.module.css";

const Login_Tmp = () => {
  return (
    <div>
      <div className={classes.input__login}>
        <input type="text" id="name" required className={classes.input} />
        <label className={classes.input__label} htmlFor="name">
          Email address
        </label>
      </div>
    </div>
  );
};

export default Login_Tmp;
