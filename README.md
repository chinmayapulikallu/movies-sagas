# Project Name

Movies - Sagas

### Description

Movies saga app allows the users  to click on a movie and it moves to the details page where it displays the movie details and when you click the back you get transferred to home page. Edit allows you to edit your move details and movie title.

### Getting Started

### Prerequisites

Before getting started, install the following software

- Node.js
- Axios
- Express
- React
- Redux
- Saga
- Create a database and tables
- Create a junction table

### Wireframes

- Home Page

    ![Home](Wire-frames/Home.png)

- Details

    ![Details](Wire-frames/Details.png)

- Edit

    ![Edit](Wire-frames/Details.png)

### Installation

1. Install nodemon globally in our terminal by running the command "npm install nodemon --global".
2. Upon downloading app, in your terminal run "npm install"
3. In your terminal, run "npm install react-router-dom" to add this component into your project file. Set up this component within your project files.
4. In your terminal, run "npm install react-redux" and import this into your project files.
5. To run client side code, run "npm run client"
6. In another terminal tab, spin up server by running "npm run server"
7. Download saga middleware from redux-saga, react logger from redux-logger as needed.

### How to Use App

1. On page load, you will see all movies from the database displayed on the page. You can select any movie poster image on this page to get more details on the movie. This will display on the details page.
2. On the details page, you have the option to click back to movie list or click to edit the title and description on the selected movies.
3. If you are editing the movie details, you will be brought to the edit page.
4. Once a new title and description is entered, select the save button to save updates. You will then be directed to your home page and the new title and description will be updated accordingly. This change is also made in your database.
5. If you decide to cancel edits, you will be taken back to the corresponding movies details page.