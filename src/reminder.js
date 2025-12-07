/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay and returns a Promise that resolves when done.
 */
function delayedReminder(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

module.exports = { delayedReminder };