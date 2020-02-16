# _DOCTOR LOOKUP_

#### _Project for Week 6 of Epicodus exploring Asynchrony and APIs, 02.14.2020_

#### By _**Drake Wilcox**_

## Description

_This project is an exercise in the use of Asynchrony and APIs. The Application utilizes the Better Doctor API to retrieve information. A user can search a medical issue in a particular area, or the name of a doctor, and receive a list of doctors that fit the search query. Information is displayed to the user that includes first and last name, adress, phone number, website, and whether or not the doctor is accepting new patients._

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Specifications
| Specification | Input | Output |
|:--------------|:------|:-------|
|User inputs a location and the site returns a list of doctors in the area| Portland, OR | list of doctors |
|User inputs a medical issue and receives a list of doctors that match the search | therapy| list of doctors|
|User inputs the first name of a doctor and receives a list of doctors that fit the searh in that area | xavier | all doctors with the first name of xavier |
|User inputs the last name of a doctor and receives a list of doctors that fit the search in that area | preciado | all doctors with the last name of preciado |
| When the site returns information, the site should display first and last name, address, phone number, website and whether or not the doctor is accepting new patients.| xavier | Xavier Preciado, 2348 NW Lovejoy St., 503.224.7224, Accepting new patients |
| If the API results in an error, the application returns with a notification| input: No location | output: please enter your location |
| If the query response does not include any doctors, the site should return with a notification | input: drake wilcox | output: No doctors meet this criteria.| 


## Known Bugs

## Support and contact details

## Technologies Used

_HTML, CSS, git, JavaScript, jQuery, npm, webpack, Jest, BetterDoctor API_

### License

*{This webpage is licesnsed under the MIT license.}*

Copyright (c) 2020 **_Drake Wilcox_**