**Description** - This repo contains the code for my personal website. The website has the following components - 

1. Sidebar - positioned fixed to the left side
2. About - general description about myself, my past experiences and looking ahead
3. Education - my college name, GPA, expected graduation
4. Experience - previous internships and jobs on campus
5. Awards - previous awards
6. Contact - to get in touch with me

**Technologies Used** - HTML, CSS and JavaScript

**Frameworks/Libraries** - React

**React packages used** - 
1. react icons - to use font awesome icons in React
2. react-scroll - to provide the functionality of smooth scrolling within the website when links are clicked
3. react-hook-form - to validate user input in the contact form
4. react-toastify - to provide notification after the form is successfully submitted. Mostly for good UX. After the user has submitted the form, a nice little notification will pop up on the bottom left corner of the screen and will be there for 5 seconds. 


**External Services** - Emailjs - to receive email after the contact form is submitted, I used this external service. AFter the user has submitted the contact form, I will get an email with the all the information that the user has filled out in the input fields. 

**Commits** - 

**First commit (09/05/2022)** - Added the sidebar component

**Second commit (09/05/2022)** - Added the about and education component

**Third commit (09/06/2022)** - Added the experience, awards component. Also added the smooth scroll effect to the website using the react-scroll package

**Fourth commit (09/07/2022)** - Added the awards section, provided links to resume, linkedin and github 

**Fifth commit (09/08/2022)** - Added the contact form component, used emailjs to receive email when the user contacts me through the website

**Sixth commit (09/09/2022)** -  Added the favicon, corrected indentation

**Seventh commit (09/10/2022)** - Updated the content in the experience section, 

**Bugs/Issues** -  

1. A major problem I faced was how to highlight the active link on the website or how to determine the component where the user is currently in. This was used to style the active link to let the user know on which section of the website they are in. 

**First fix** - I used useState hook and caught the scroll event and checked the position of user by window.scrollY. This allowed me to see in which section the user is in. However, this meant that I would have 6 states for 6 links/sections of webpage, and this led to **scalabality** issues. Also, when the width of screen was shortened, the window.acrollY wasn't calculating properly because the length of the content had increased, while the window.scrollY values had been hardcoded to check.

**Second fix** - Upon searching, I found that using either Link or Navlink from the react-router/dom would be helpful, but react router is mostly used for multiple page websites. 

**Third fix** - Soon, I found out that CSS has a built-in property for smooth scrolling. By writing, html, body {scroll-behavior:smooth}, I was able to do smooth scrolling, which meant that I didn't need to use react-scroll for smooth scrolling in the first place. 

**Final fix** - I didn't knew that react-scroll has an activeClass prop, which itself identifies the active link, and makes it easier to style the active link. It is very similar to how the activeClassName was in previous version of react-router. However, there is a caveat - it only highlights the active link when it sees it on the top of the website. 
