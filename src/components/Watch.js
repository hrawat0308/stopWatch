import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./Watch.module.css";
import WatchButtons from "./WatchButtons";

const Watch = function () {
  const time = useSelector((state) => state.stopWatch.time);
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = hours < 10 ? "0" + Math.floor(time / 3600).toString() : hours;
  minutes =
    minutes < 10
      ? "0" + Math.floor((time - hours * 3600) / 60).toString()
      : minutes;
  seconds =
    seconds < 10
      ? "0" + (time - hours * 3600 - minutes * 60).toString()
      : seconds;
  return (
    <Fragment>
      {!time && <h3 className={classes.watch}>00 : 00 : 00</h3>}
      {time && (
        <h3 className={classes.watch}>
          {hours} : {minutes} : {seconds}
        </h3>
      )}
      <WatchButtons />
    </Fragment>
  );
};

export default Watch;