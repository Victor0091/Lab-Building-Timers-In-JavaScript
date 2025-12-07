function delayedReminder(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

function countdownTimer(start) {
  let time = start;

  const interval = setInterval(() => {
    console.log(time);
    time--;

    if (time === 0) {
      clearInterval(interval);
    }
  }, 1000);

  return interval;
}

function recurringTimer(message, interval) {
  return setInterval(() => {
    console.log(message);
  }, interval);
}

function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}

module.exports = {
  delayedReminder,
  countdownTimer,
  recurringTimer,
  stopRecurringTimer
};
