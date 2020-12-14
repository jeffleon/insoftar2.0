# Insoftar


### pre-requisite
Before starting, it is important to consider the following programs in order to execute the project
  - Git
  - Node
  - Mysql

you have to create a database with name 'insoftar'
  - CREATE DATABASE [IF NOT EXISTS] talenta;

then in the root of the Library folder add a .env file
inside of this file add two variables with your respectively data
  - PASSWORD = "xxxxx"
  - USER = "xxxxx"


## API rest
Api rest for Manage Infostar page this page run in port 5000

## React app
Front-end page run in port 3000 and begin with endpoint '/'

# API rest endpoints allowed
    - GET /api/users
    - GET /api/users/:id
    - POST /api/users/
    - DELETE /api/users/:id
    - PATCH /api/users/:id

# start 🚀
To be able to run the application and use it in a local development environment you can follow
the following steps:

Clone the repository to have the local project and go inside of them
```
git clone https://github.com/jeffleon/insoftar2.0.git
cd insoftar2.0 
```
Before to start you need to install the dependecies
go inside two folders and install dependencies and run npm install
```
cd insoftar
npm install
```
that was the dependencies about the API 
do the same in the front-end aplication
```
cd ..
cd insoftar-front-end
npm install
``` 
# run aplications
    - for API
        - go inside the folder as mention in before steps 
        - then run "npm start"
        - or "npm run debug"
    - React app
        - go inside the folder as mention in before steps 
        - then run "npm start"
### Built with 🛠️
The core language used to develop the application is
- Node.js - 12.16.1

The libraries that will be used to develop the application are:
- react-redux-forms
- Semantic-UI
- mysql

Frameworks:
- Express
- React


### authors 🗒
- Jefferson Alexander Leon Back-end
