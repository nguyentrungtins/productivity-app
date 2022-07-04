import classes from "./PomoCircle.module.css";
const PomoCircle = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.ocean}>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
          <div className={classes.wave__footer}></div>
          <h2 className={classes.time}>22:00</h2>
        </div>
      </div>
    </>
  );
};

export default PomoCircle;
