# node_task
## Node api
A web server with a RESTful API 

---

## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---


## Install

    $ git clone https://github.com/shivam-gridx/node_task.git
    $ cd node_task
    $ npm install

## Running the project

    $ npm start

## For testing

    $ npm test

---

# APIs and Data

## Data Overview

```
[{
    "make": "Infiniti",
    "model": "G",
    "year": 1993,
    "power": "Level 1 (1.6 kW)",
    "weekday_mileage": 33,
    "weekend_mileage": 10
  },
  {
    "make": "Ford",
    "model": "F-Series",
    "year": 1993,
    "power": "Level 1 (1.6 kW)",
    "weekday_mileage": 97,
    "weekend_mileage": 25
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}]

```
> Data.json contains data of 10 cars.

## API Endpoints

> http://localhost:8000/cars 
```json
[
  {
    "make": "Infiniti",
    "model": "G",
    "year": 1993,
    "power": "Level 1 (1.6 kW)",
    "weekday_mileage": 33,
    "weekend_mileage": 10,
    "start_time": "15:53"
  },
  {
    "make": "Ford",
    "model": "F-Series",
    "year": 1993,
    "power": "Level 1 (1.6 kW)",
    "weekday_mileage": 97,
    "weekend_mileage": 25,
    "start_time": "8:08"
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
]
```

> http://localhost:8000/cars/makers
```json
{
  "status": "success",
  "message": "null",
  "data": [
    "Infiniti",
    "Ford",
    "Ford",
    "Kia",
    "Ford",
    "Lexus",
    "Pontiac",
    "Volkswagen",
    "Mitsubishi",
    "Chevrolet"
  ]
}
```

> http://localhost:8000/cars/:maker/modelData
> 
> Eg:  http://localhost:8000/cars/Ford/modelData
```json
{
"status": "success",
"message": "null",
"data": [
    {
      "model": "F-Series",
      "year": 1993,
      "power": "Level 1 (1.6 kW)",
      "weekday_mileage": 97,
      "weekend_mileage": 25,
      "start_time": "8:08"
    },
    {
      "model": "F150",
      "year": 2003,
      "power": "Level 1 (1.6 kW)",
      "weekday_mileage": 41,
      "weekend_mileage": 38,
      "start_time": "23:22"
    },
    {
      "model": "Taurus",
      "year": 1989,
      "power": "Level 1 (1.6 kW)",
      "weekday_mileage": 69,
      "weekend_mileage": 67,
      "start_time": "5:10"
    }
  ]
}
```
