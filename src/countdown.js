/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 */
function countdownTimer(startTime, interval = 1000) {
  let time = startTime;

  const timerId = setInterval(() => {
    console.log(time);
    time--;

    if (time === 0) {
      clearInterval(timerId);
    }
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };
