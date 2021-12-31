# Project Woods

As a man who's life ambition is to create the ultimate fishing adventure (hyperbole, but stick with me here) I wanted to prototype a simple fishing minigame. More importantly I wanted to broaden my understanding of React, explore new technologies, and revisit some libraries I haven't used in a while.

## Sharpening Skills

The fishing minigame is achieved through a bit of state experimentation. It's not as ideal as having made the game using a canvas element but I wanted a lot of practice changing state and passing information up and down components. I also got the opportunity to use aspects of React that I haven't had much experience with such as Refs, custom hooks, and providers.

For a previous project I made a simple chat app using Socket.io and Express. I then rebuilt a modified version to support a live feed that would display player's catches in real time. The back-end also stores the biggest catches in a SQL table using Postgres. I then deployed the server using Heroku where it is hopefully still up and running (clearly I don't pay them). The back-end is in a separate repo however, this repo is the client side code.

For the front-end styling I tried to use as much Bootstrap as I could remember. It's been a while since I last used Bootstrap on a project and I appreciate how much time it saves on styling, but one has to keep a certain familiarity up to capitalize on that. In the end there is a mix of Bootstrap classes and components with my own CSS holding this project together.

I drew the SVG assets for this project using an online SVG editor. I'm not much of an artist and SVGs in particular have been a mystery to me for some time now. But I watched through a Udemy class and then gave it my best shot. I'm not in *love* with the final outcome, but it does have a certain charm that I can be happy with. When the fishing pole turns is when you have a bite by the way.

## Getting Started

This is a React app made using `npx create-react-app` so in the project directory you can run `npm install` to install dependencies then `npm start` to runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
