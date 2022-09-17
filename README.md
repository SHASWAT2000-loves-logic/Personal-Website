**Description** - This repo contains the code for my personal website. The website has the following components for a user using any device other than smartphone- 

1. Sidebar - positioned fixed to the left side
2. About - general description about myself, my past experiences and looking ahead
3. Education - my college name, GPA, expected graduation
4. Experience - previous internships and jobs on campus
5. News - latest updates about my work
6. Awards - previous awards
7. Contact - to get in touch with me

**Note** - There is an additional component (MobileNavbar), which only comes into play when the screen size is less than 480px or when the user is on mobile device.

**Technologies Used** - HTML, CSS and JavaScript

**Frameworks/Libraries** - React

**React packages used** - 
1. react icons - to use font awesome icons in React
2. react-scroll - to provide the functionality of smooth scrolling within the website when links are clicked. This package is still growing and there might be some bugs that can go unnoticed. 
3. react-hook-form - to validate user input in the contact form
4. react-toastify - to provide notification after the form is successfully submitted. Mostly for good UX. After the user has submitted the form, a nice little notification will pop up on the bottom left corner of the screen and will be there for 5 seconds. 
5. react-hamburger-menu - for creating a hamburger menu on mobile devices

**3rd party service** - 

**1.**- Formspree- Used this to receive emails when the users sent me a message through my website
**2.** - Used Axios for making HTTP requests for the contact form.

**External Services** - Emailjs - to receive email after the contact form is submitted, I used this external service. AFter the user has submitted the contact form, I will get an email with the all the information that the user has filled out in the input fields. 

**Media Queries** - For responsive web design there are separate CSS files for devices of different screen sizes

a. Mobile devices - 320px - 480px (mobile.css)

b. iPads, Tablets - 481px - 768px (tablets.css)

c. Small screens, laptops - 769px - 1024px (laptops.css)

d. Desktop, large screens - >1024px (index.css or the global stylesheet)


**Commits** - 

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

**Bugs/Issues** -  

**1. Highlight active link**. A major problem I faced was how to highlight the active link on the website or how to determine the component where the user is currently in. This was used to style the active link to let the user know on which section of the website they are in. 

**First possible fix** - I used useState hook and caught the scroll event and checked the position of user by window.scrollY. This allowed me to see in which section the user is in. However, this meant that I would have 6 states for 6 links/sections of webpage, and this led to **scalabality issues**. Also, when the width of screen was shortened, the window.acrollY wasn't calculating properly because the length of the content had increased, while the window.scrollY values had been hardcoded to check.

**Second possible fix** - Upon searching, I found that using either Link or Navlink from the react-router/dom would be helpful, but react router is mostly used for multiple page websites. 

**Third possible fix** - Soon, I found out that CSS has a built-in property for smooth scrolling. By writing, html, body {scroll-behavior:smooth}, I was able to do smooth scrolling, which meant that I didn't need to use react-scroll for smooth scrolling in the first place. 

**Final fix** - I didn't knew that react-scroll has an activeClass prop, which itself identifies the active link, and makes it easier to style the active link. It is very similar to how the activeClassName was in previous version of react-router. However, there is a caveat - it only highlights the active link when it sees it on the top of the website. This means that highlighting active link sometimes **fails unpredictably**. A better solution to this problem would have been to use Boostrap, because it has built-in scrollspy library, which takes care of scrolling and highlighting active link.

**2. Return to top of page after refresh (resolved)**. Display the page from the top whenever the website is refreshed - Web browsers record the last scrollY position of the user before a refresh and start from that position once the page is loaded. However, I wanted the user to start from the very top, whenever the user refreshes. 

**First possible fix** - use onbeforeunload to change the last recorded position before refresh to the top of the page. 

**Second possible fix** - The combination of useEffect hook and window.scrollTo() function takes the user to the top of the page after the page is refreshed. 

**Final possible fix** - useEffect doesn't work on smaller screens, so I had to revert back to use window.onbeforeunload.

**3. Problems after hosting on AWS, but not on local host -**

**a. Links of media query showing up on full screen size (resolved)** - After hosting my website on AWS, I saw that whenever my website was launched, the links of MobileNavbar component were showing. To remove this, I had to use display:none on the links, and then display them when the screen width was reduced and MobileNavbar component comes into play. 

**b. The link to the pdf of my resume was not working (resolved)** - To fix this, I added pdf in regex in the source address column of the Rewrite and Redirects section. 

**c. The contact form is not working** - I was using EmailJS as an external SMTP client, but AWS Amplify doesn't seem to recognize it. Instead, I got to know that AWS Amplify has its own Amazon SES (Simple Email Services) SMTP for sending mails. I tried using AWS SES, Lambda function, API Gateway, but to no avail, so I finally decided to deploy by website on Vercel. 
