This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of Contents

- [Running the application](#running-the-application)
- [FourSquare API](#foursquare-api)
- [Usage](#usage)

## Running the application

Clone the github repository and 
* cd NeighborhoodMaps
* Install the project dependencies by running `npm install`. This will download the node_modules folder.
* start the server with `npm start` or `yarn start`

## Running the application in production mode

* npm run build
* serve -s build

Ensure that serve is installed by running npm install -g serve
And then visit http://localhost:5000 to view the application in production mode
Service worker functionality will be available in production mode.

## FourSquare API

This project uses the FourSquare api to load the locations

## Usage

After the application loads, a list of locations are loaded which are displayed on the left pane. A set of corresponding markers are displayed on the map also. To know more informatin about a location, simply click on the marker or location on the left pane. A textbox is provided to filter the locations. As soon as you begin typing the locations and markers are dynamically filtered for matching terms. 

## Contribution
Make the change and submit a pull request. See CONTRIBUTING for more details.

## LICENSE
GNU Affero General Public License v3.0
See the LICENSE file in this project repository for more information