const { recurringTimer, stopRecurringTimer } = require('../src/recurringTimer');

jest.useFakeTimers();

describe('recurringTimer', () => {
  beforeEach(() => {
    console.log = jest.fn(); // mock console.log
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('should log the message at the specified interval', () => {
    const message = 'Hello!';
    const timerId = recurringTimer(message, 1000);

    jest.advanceTimersByTime(3000);

    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith(message);

    clearInterval(timerId);
  });

  test('should stop logging when stopRecurringTimer is called', () => {
    const message = 'Ping';
    const timerId = recurringTimer(message, 1000);

    jest.advanceTimersByTime(3000);

    stopRecurringTimer(timerId);
    jest.advanceTimersByTime(3000);

    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith(message);
  });
});
