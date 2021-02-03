export const timerFunction = (() => {
  let intId;
  let counter = 0;

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  const makeTime = () => {
    counter++;
    hours = Math.floor(counter / 60 / 60);
    minutes = Math.floor(counter / 60) - hours * 60;
    seconds = counter % 60;
    console.log(hours, minutes, seconds)
  };

  const startTimer = () => {
    intId = setInterval(makeTime, 1000);
  };

  const refreshTimer = () => {
    clearInterval(intId);
    counter = 0;
  };

  const getHours = () => hours;
  const getMinutes = () => minutes;
  const getSeconds = () => seconds;
  
  return { startTimer, refreshTimer, getHours, getMinutes, getSeconds };
})();
