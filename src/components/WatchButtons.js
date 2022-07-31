import { useDispatch, useSelector } from "react-redux";
import { stopWatchActions } from "../store";
import classes from "./WatchButtons.module.css";

const WatchButtons = function () {
  const dispatch = useDispatch();
  let timeId;
  const intervalId = useSelector((state) => state.stopWatch.interval);
  const watchStartHandler = () => {
    if (intervalId) return;
    timeId = setInterval(() => {
      dispatch(stopWatchActions.start());
    }, 1000);
    dispatch(stopWatchActions.setIntervalId({ id: timeId }));
  };

  const watchStopHandler = () => {
    clearInterval(intervalId);
    dispatch(stopWatchActions.resetInterval());
  };

  const watchResetHandler = () => {
    clearInterval(intervalId);
    dispatch(stopWatchActions.resetInterval());
    dispatch(stopWatchActions.reset());
  };

  return (
    <div className={classes.btnContainer}>
      <button onClick={watchStartHandler} className={classes.btn}>
        Start
      </button>
      <button onClick={watchStopHandler} className={classes.btn}>
        Stop
      </button>
      <button onClick={watchResetHandler} className={classes.btn}>
        Reset
      </button>
    </div>
  );
};

export default WatchButtons;