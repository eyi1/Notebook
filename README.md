# Noteböök App
 
A simple note-taking app to help users organize their notes. 
Built using React, Redux, and Rails API.

<<<<<<< HEAD
##Table of Contents
=======
## Table of Contents
>>>>>>> feature/note-crud
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)

## General info
This project requires Ruby 2.5.0 and npm install. 
There are two repos, please use them together:

API: https://github.com/eyi1/notebook_app
Client: https://github.com/eyi1/Notebook

	
## Technologies
Project is created with:
* Ruby version: 2.5.0
* node version: 11.9.0
* npm version: 6.9.0
	
## Setup
To run this project, follow these steps:

```
Steps:

-Clone the two repos above locally
-Then move the Client directory into the root of the API directory.
-This is neccessary as I have set up backend Rails API to work with the front-end React-app using the Foreman gem
-bundle install
-rails db:migrate
-rails db:seed (to seed the database)
-cd notebook and run npm install
-rake start (should open browser to http://localhost:3000)
```

## Code Status
<<<<<<< HEAD
https://travis-ci.org/eyi1/notebook_app.svg?branch=master

##Future Revisions
=======
[![Build Status](https://travis-ci.org/eyi1/Notebook.svg?branch=master)](https://travis-ci.org/eyi1/Notebook)

## Future Revisions
>>>>>>> feature/note-crud

Future inclusion of:

User authentication

<<<<<<< HEAD
##License
=======
## License
>>>>>>> feature/note-crud

The gem is available as open source under the terms of the MIT License.
