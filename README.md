

# Project description

This repo contains the code for my personal website. The website has the following sections- 

1. Home - general description about myself including my past experiences and looking ahead
2. Education - college name, GPA, graduation date
3. Experience - previous internships and jobs on campus
4. News - latest updates about what's happening in my life
5. Awards - previous awards that I have received
6. Contact - to get in touch with me

## Project link - www.shaswatshukla.com

### Motivation for the project 

I wanted to build my own personal website from scratch. I chose React because it is ideal for building a single page application.  

### Major takeaways from the project

1. Component based nature of React. Built various components in React and saw how they add up to make the website. 
2. Responsive design in React.
3. Learnt various AWS services like AWS Amplify, Lambda function, IAM, API Gateway, AWS SES.
4. Learnt the importance of using exisitng npm packages to add features in a website. 
5. How to debug production code problems or the problems that were not showing up on the local host, but were there when the website was depolyed on the web.   
6. Learnt about branching and merging in Git. Created a new branch to solve the highlighting active link problem and after the issues were fixed, I merged it with the main branch.

### Technologies

HTML, CSS and JavaScript

### Frameworks/Libraries

React

### Commit history 

**First major commit (09/05/2022)** - Added the sidebar component

**Second major commit (09/05/2022)** - Added the about and education component

**Third major commit (09/06/2022)** - Added the experience, awards component. Also added the smooth scroll effect to the website using the react-scroll package

**Fourth major commit (09/07/2022)** - Added the awards section, provided links to resume, linkedin and github 

**Fifth major commit (09/08/2022)** - Added the contact form component, used emailjs to receive email when the user contacts me through the website

**Sixth major commit (09/09/2022)** -  Added the favicon, corrected indentation

**Seventh major commit (09/10/2022)** - Updated the content in the experience section, styled the card that holds the content 

**Eighth major commit (09/13/2022)** - Added media queries for responsive website design. Media queries for screen sizes in range 481px - 767px and 768px - 1024px 

**Ninth major commit (09/14/2022)** - Added media query for mobile devices. Created a hamburger menu of links for mobile devices

**Final commit (09/14/2022)** - Added my name to the navbar alongside the hamburger menu

**Update (02/04/2023)** - Fixed the active link issue. Explanation can be found in the readme file of the fixed-active-link-issue branch. 

### Media Queries 

For responsive web design there are separate CSS files for devices of different screen sizes -

a. Mobile devices - 320px - 480px (mobile.css)

b. iPads, Tablets - 481px - 768px (tablets.css)

c. Small screens, laptops - 769px - 1024px (laptops.css)

d. Desktop, large screens - >1024px (index.css)

### HTTP client 

Axios for making the post request when the user submits the contact form. 

### React packages used  

1. react icons - to use font awesome icons in React

2. react-scroll - to highlight the active link and provide the functionality of smooth scrolling within the website when links are clicked 

3. react-hook-form - to validate user input in the contact form

4. react-toastify - to provide notification after the form is successfully submitted. Mostly for good UX. After the user has submitted the form, a notification will pop up on the bottom right corner of the screen and will disappear after 5 seconds. 

5. react-hamburger-menu - for creating a hamburger menu on mobile devices

### 3rd party service 

1. Formspree - Used this to receive emails when the users sent me a message through my website

2. Axios - for making HTTP requests for the contact form.

### Bugs/Issues  

1. **Highlight active link (resolved)** - A major problem I faced was how to highlight the active link on the website or how to determine the component where the user is currently in. This was used to style the active link to let the user know on which section of the website they are in. 

**First possible fix** - I used useState hook and caught the scroll event and checked the position of user by window.scrollY. This allowed me to see in which section the user is in. However, this meant that I would have 6 states for 6 links/sections of webpage, and this led to **scalabality issues**. Also, when the width of screen was shortened, the window.acrollY wasn't calculating properly because the length of the content had increased, while the window.scrollY values had been hardcoded to check.

**Second possible fix** - Upon searching, I found that using either Link or Navlink from the react-router/dom would be helpful, but react router is mostly used for multiple page websites. 

**Third possible fix** - Soon, I found out that CSS has a built-in property for smooth scrolling. By writing, html, body {scroll-behavior:smooth}, I was able to do smooth scrolling, which meant that I didn't need to use react-scroll for smooth scrolling in the first place. However, I was not able to get the features of highlighted active link and highlighting the link to the section in which the user is in currently.  

**Fourth possible fix** - Used react-scroll npm package to highlight active link. It has a activeClass prop which makes sure that the styling is applied to an active link. But there is some issue when we use a combination of smooth scrolling and highligthing active link in react-scroll. https://github.com/fisshy/react-scroll/issues/29. Because of this the clicked link doesn't highlight on all ocassions and fails unpreditably. 

**Final fix** - I was able to fix this issue by removing the scroll smooth effect prop from the Link component and instead, I used html, body {scroll-behavior:smooth}  in the style sheet. This issue was resolved in the fixed-active-link-issue branch.  

2. **Return to top of page after refresh (resolved)**. Display the page from the top whenever the website is refreshed - Web browsers record the last scroll position of the user before a refresh and start from that position once the page is loaded. However, I wanted the user to start from the very top, whenever the user refreshes. 

**First possible fix** - use onbeforeunload to change the last recorded position before refresh to the top of the page. 

**Second possible fix** - onbeforeunload() was not working for some reason, but the combination of useEffect hook and window.scrollTo() function was able to take the user to the top of the page after the page is refreshed.  

**Final possible fix** - window.scrollTo() wasn't working for smaller screens, so I used window.history.scrollRestoration = "manual", which makes sure that the browser doesn't store the scroll position before the page is refreshed and the "manual" value, allows the page to start from the top every time it is loaded. This issue was resolved in the fixed-active-link-issue branch.

3. **Problems after hosting on AWS, but not on local host (production code problems)** - 

a. **Links of media query showing up on full screen size (resolved)** - After hosting my website on AWS, I saw that whenever my website was launched, the links of MobileNavbar component were showing. To remove this, I had to use display:none on the links, and then display them when the screen width was reduced and MobileNavbar component comes into play. 

b. **The link to the pdf of my resume was not working (resolved)** - To fix this, I added pdf in regex in the source address column of the Rewrite and Redirects section in AWS.

c. **The contact form is not working (resolved)** - I was using EmailJS as an external SMTP client, but AWS Amplify doesn't seem to recognize it. Instead, I got to know that AWS Amplify has its own Amazon SES (Simple Email Services) SMTP for sending mails. I tried using AWS SES, Lambda function, API Gateway, but to no avail, so I finally decided to deploy my website on Vercel. To deploy my website on Vercel using the domain bought on AWS, I had to make some root changes to my AWS domain. 
