# README

A simple note-taking app to help users organize their notes. 
I have built this app using React, Redux, and Rails API.

#Installation

This project requires Ruby 2.5.0 and npm install. 
There are two repos, please use them together:

API: https://github.com/eyi1/notebook_app
Client: https://github.com/eyi1/Notebook

Steps:

-Clone the two repos above locally
-Then move the Client directory into the root of the API directory.
-This is neccessary as I have set up backend Rails API to work with the front-end React-app using the Foreman gem
-bundle install
-rails db:migrate
-rails db:seed (to seed the database)
-cd notebook and run npm install
-rake start (should open browser to http://localhost:3000)

#Future Revisions

Future inclusion of:

User authentication

#License

The gem is available as open source under the terms of the MIT License.
