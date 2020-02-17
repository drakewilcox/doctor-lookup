# _DOCTOR LOOKUP_

#### _Project for Week 6 of Epicodus exploring Asynchrony and APIs, 02.14.2020_

#### By _**Drake Wilcox**_

## Description

_This project is an exercise in the use of Asynchrony and APIs. The Application utilizes the Better Doctor API to retrieve information. A user can search a medical issue in a particular area, or the name of a doctor, and receive a list of doctors that fit the search query. Information is displayed to the user that includes first and last name, adress, phone number, website, and whether or not the doctor is accepting new patients._

## Setup/Installation Requirements

To use this application, follow the following instructions. 

#### Node Installation

##### For macOS: 

_If Homebrew is not installed on your computer, enter the following two commands in the terminal:_ 
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:PATH' >> ~/.bash_profile

_Installing Git:_
* $ brew install git

_Installing Node.js:_
* $ brew install node

##### For Windows: 
_Visit the [node.js](https://nodejs.org/en/download/) web for installation instructions_

#### Application Setup:
_Clone this repository via Terminal using the following commands:_
* ``$ cd desktop``
* ``$ git clone https://github.com/drakewilcox/doctor-lookup``
* ``$ cd doctor-lookup``

_ in the root directory create a file name ``.env`` by entering the command_ ``touch .env`` _in Terminal)._

_Visit the BetterDoctor API [website](https://developer.betterdoctor.com/) and click "Get a free API key". Fill out the form, then your own API key will be listed on the front page or under My Account > Applications._

_On the first line of the .env file, add the following:_
``API_KEY = {replace this text and curly braces with your own BetterDoctor API key}``

_Install node package manager (npm) at the project's root directory via the following command:_
* ``$ npm install``

_Open this application via live server using the following command:_
* ``$ npm run start``

## Specifications
| Specification | Input | Output |
|:--------------|:------|:-------|
|User inputs a location and the site returns a list of doctors in the area| Portland, OR | list of doctors |
|User inputs a medical issue and receives a list of doctors that match the search | therapy| list of doctors|
|User inputs the first name of a doctor and receives a list of doctors that fit the searh in that area | xavier | all doctors with the first name of xavier |
|User inputs the last name of a doctor and receives a list of doctors that fit the search in that area | preciado | all doctors with the last name of preciado |
| When the site returns information, the site should display first and last name, address, phone number, website and whether or not the doctor is accepting new patients.| xavier | Xavier Preciado, 2348 NW Lovejoy St., 503.224.7224, Accepting new patients |
| If the API results in an error, the application returns with a notification| input: unknown info that could cause bugs | output: error |
| If the query response does not include any doctors, the site should return with a notification | input: drake wilcox | output: No doctors meet this criteria.| 


## Known Bugs
This project called for websites to be displayed under the doctor information, however the API does not provide a website for many of the doctors so this function does not appear at this time.

## Support and contact details

## Technologies Used

_HTML, CSS, git, JavaScript, jQuery, npm, webpack, Jest, BetterDoctor API_

### License

*{This webpage is licesnsed under the MIT license.}*

Copyright (c) 2020 **_Drake Wilcox_**