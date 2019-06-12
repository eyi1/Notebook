# Noteböök App
 
A simple note-taking app to help users create notebooks and organize their information. 
Built using React, Redux, and Rails API.

App Hierarchy:

At the very top level, a user can create a notebook. A user is also able to view, rename, and delete notebooks.
At the level below that, a user is able to create a note. A user is also able to view, edit and delete notes. 

## Table of Contents
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
-sign up to start using the notebook features
```

## Code Status
[![Build Status](https://travis-ci.org/eyi1/Notebook.svg?branch=master)](https://travis-ci.org/eyi1/Notebook)

## Future Revisions

Future inclusion of:

User authentication (not fully implemented)

## License

The gem is available as open source under the terms of the MIT License.
