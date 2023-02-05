**Issues resolved** - 

1. **Highlighting active link** - Earlier, when a link was clicked, react-scroll wouldn't highlight that link on all occasions. Fixed this issue by getting rid of the smooth prop in the Link component in react-scroll and implemented smooth scroll from CSS. 

2. **Returning to top of the website after a refresh** - After reloading the page, the website used to start at the same position as before the reload. Used the history API in JavaScript to not allow the browser to store the last scroll position before a reload, which made sure that the when the website reloads it starts from the top. 
