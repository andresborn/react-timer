# React Timer

### This is a small Timer using React.

React allows dynamic rendering using state.

The timer works like this:

When you click the Start button, we call `startTimer()`. Here we store the current time at which the timer was started in `init`, then, we define how much time has passed by substracting `init` to the current time and assign it to `delta`.

After that, we can get the seconds, minutes and hours from `delta`.

Finally, we apply some functions to clean up our data into single digits for display using `.toLocaleString` and `splice()`.

Our `setInterval` function updates the state every 100ms.

The React documentation served as the guide for this exercise.

We changed from using setInterval to using JS Dates to get our times.

Turns out setInterval is very unreliable as a time keeper. Reference:
https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript

You can see the code live at:
https://andresborn.github.io/react-timer/
