### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
News Every Minute NOW! is an app that shows the top 100 News headlines from News API searches. Upon Page Load, the user has the ability see the top 100 Headlines, click on any of the cards for more info, access the actual websites, and return home. At the home page, the user has the ability to filter through some of the top current news topics such as "Harris," "Trump," "Walz," "Vance," "Musk," "Crypto," and "Bitcoin". Articles will filter based on the included phrase. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1) Access the form here: https://github.com/zachwolek/news-api-intermission
2) Copy the SSH repository URL git@github.com:zachwolek/news-api-intermission.git
3) Open terminal and 'cd' into the directory you wish to clone 
4) Clone the repository by submitting `git clone git@github.com:zachwolek/news-api-intermission.git`

For Testing:
Testing was not completed within the 8 hour time frame 

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![Preview description](https://imgur.com/a/SxKKkCY)
Users can filter through articles based on a popular phrase and return home 


### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This project was assigned in intermission between Turing School of Software & Design's Modules 3 and 4. Each Module is 6 weeks in length, and the intermission was one week long. 

The project was suggested a limit of 8 hours of keyboard time. 

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
Zach Wolek: https://github.com/zachwolek/

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The primary learning goal of this project was to build a single app using React and React Router to simulate a multi-page app.  

Technologies across the project involved React, Browser Routing, JSX, React Hooks, HTML, JS/ES6, and CSS. 


### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
1) The single greatest challenge in the timespan was the limit of actual API requests one could do in a day. After 100 GET requests in a 24 hour period, the user is essentially locked out from attempting more. 

The website was initially built upon mock data from the '/top-headlines' endpoint after running out of GET requests. After the 24 hour lockout, it became clear the '/everything' API endpoint would achieve a greater user experience, however this required rebuilding the filtration system

Under '/top-headlines' the 'author' of each Article was a news source (and could have been searched by CNN, The New York Times, The Washington Post, etc) but under the new API, 'author' was now specific writer names. The quick pivot in time allotment required shifting toward filtering by 'phrase', which filtered by a dropdown menu of current political candidates in the Presidential Election, important tech phrases, and Elon Musk.  
2) Another challenge upon the initial build was the number of 'null' data points that were genderated upon the '/top-headlines' endpoint. 

To work around the number of 'null' data points, images were conditinally rendered in place where image URLs did not exist. This became useful in the pivot, as it ironed out all images for a website consistent in design of components
3) Upon viewing a link, if a user hits the "back" button, the stored states were erased creating breaking the webpage. If the user ever experiences an empty state, the '404' screen at the Route path of '*' is shown if the user returns to a single article view page from the external URL