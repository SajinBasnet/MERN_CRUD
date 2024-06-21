MERN-CRUD-LEARNING
This project demonstrates a simple CRUD application using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to perform basic operations such as adding, updating, and deleting user information through a set of RESTful APIs.

Topics Covered
MongoDB:

Database setup
Creating schemas and models using Mongoose
Performing CRUD operations
Express.js:

Setting up an Express server
Creating RESTful API endpoints
Handling requests and responses
React.js:

Creating functional components
Using state and effects with useState and useEffect hooks
Making API calls with Axios
Managing forms and user input
Node.js:

Server-side scripting
Integrating with MongoDB using Mongoose
Implementing middleware
Features
Add User: Users can add new user information through a form.
Update User: Users can update existing user information. The form will be pre-populated with the selected user's data.
Delete User: Users can delete existing user information.
Fetch Users: Users' information is fetched from the database and displayed in a table format.
Project Structure
Backend
server.js: Entry point of the backend server.
routes: Contains all the route handlers for the CRUD operations.
models: Defines the Mongoose schemas and models.
controllers: Contains the logic for handling CRUD operations.
Frontend
src: Contains all the React components and hooks.
components: Contains React components like Table, AddUser, UpdateUser, and DeleteUser.
App.js: Entry point of the React application.
index.js: Renders the React application.
Getting Started
Prerequisites
Node.js
MongoDB
