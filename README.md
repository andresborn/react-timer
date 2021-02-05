# react-timer

### This is a small Timer using React.

React allows dynamic rendering using state. 

The timer works like this:

When you click the Start button, we call `startTimer()`, which sets an interval to call `count()` every second.
`count()` adds 1 to the `counter`, which is a variable inside our `state`. Our other variables, `hours`, `minutes`, 
and `seconds` get updated in relation to `counter`. We then apply some functions to clean up our data into single 
digits for display using `.toLocaleString` and `splice()`. Finally, every time our `state` changes, our `render()` 
updates the DOM.

The React documentation served as the guide.

You can see the code live at:
https://andresborn.github.io/react-timer/
