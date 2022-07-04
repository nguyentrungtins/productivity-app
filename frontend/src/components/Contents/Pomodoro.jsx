import React from "react";
import classes from "./Pomodoro.module.css";
import PomoCircle from "./PomoCircle";
const Pomodoro = () => {
  return (
    <div className={classes.pomodoro}>
      <h1 className="header__content">Pomodoro</h1>
      <div className={classes.top}>
        <PomoCircle />
        <div className={classes.pomo__control}>
          <div className={classes.header_wrapper}>
            <h3 className={classes.header}>25m</h3>
          </div>
          <div className={classes.pomo__control_mid}>
            <label htmlFor="status_focus">Status</label>
            <div className={classes.selector_wrapper}>
              <select className={classes.selector} id="status_focus">
                <option value="" disabled selected>
                  Focus
                </option>
                <option value="1">Study</option>
                <option value="2">Work</option>
                <option value="3">Break</option>
              </select>
            </div>
          </div>

          <button type="button" className={classes.btn}>
            Start
          </button>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={`${classes.card} ${classes.active}`}>
          <div className={classes.header_card}>
            <h1>15m</h1>
            <div className={classes.break}></div>
          </div>
          <div className={classes.card_bottom}>
            <h3>Today</h3>
            <h1>0</h1>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.header_card}>
            <h1>25m</h1>
            <div className={classes.break}></div>
          </div>
          <div className={classes.card_bottom}>
            <h3>Today</h3>
            <h1>5</h1>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.header_card}>
            <h1>30m</h1>
            <div className={classes.break}></div>
          </div>
          <div className={classes.card_bottom}>
            <h3>Today</h3>
            <h1>3</h1>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.header_card}>
            <h1>45m</h1>
            <div className={classes.break}></div>
          </div>
          <div className={classes.card_bottom}>
            <h3>Today</h3>
            <h1>1</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
