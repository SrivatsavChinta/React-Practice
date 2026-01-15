import styles from "./FocusSession.module.scss";
import { Button } from "../ui/Button/Button";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaRegCircleStop } from "react-icons/fa6";
import { useTimeStore } from "../../store/timeStore";
import { useTaskStore } from "../../store/taskStore";

export const FocusSession = () => {
  const {
    seconds,
    minutes,
    hours,
    intervalId,
    incrementSeconds,
    pauseTimer,
    stopTimer,
    setIntervalId,
  } = useTimeStore();

  const { setMode } = useTaskStore();

  const handlePlayButton = () => {
    if (intervalId !== null) return;

    const id = setInterval(() => {
      incrementSeconds();
      setMode();
    }, 1000);

    setIntervalId(id);
  };

  const handlePauseButton = () => {
    if (intervalId) {
      pauseTimer();
    }
  };

  const handleStopButton = () => {
    stopTimer();
    setMode();
  };

  return (
    <div className={styles.focusContainer}>
      <h2>Focus Session</h2>

      <div className={styles.timerContainer}>
        <span className={styles.hours}>{hours}h: </span>
        <span className={styles.minutes}>{minutes}m: </span>
        <span className={styles.seconds}>{seconds}s</span>
      </div>

      <div className={styles.buttonContainer}>
        <Button Icon={FaPlay} func={handlePlayButton} />
        <Button Icon={FaPause} func={handlePauseButton} />
        <Button Icon={FaRegCircleStop} func={handleStopButton} />
      </div>
    </div>
  );
};
