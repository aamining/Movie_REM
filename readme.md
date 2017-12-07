# This Repo.

* This repo is containing two other folders, api and react-web

* api: deal with node api. it has also its readme file.
* react-web deal with how to connect front to back end with proxy. It also has its readme file


# MongoDB

Mongoose: Mongoose is a MongoDB object modelling tool designed to work in an asynchronous environment.

1- node

2- in node:
const person =require(‘./api/model/person.js’)
note: for this code we have to be out of directory

3- in node command:
person=Person.create({firstName:'John', lastName:'Rambo'})

it will create a promise like :

Promise {
  <pending>,
  domain:
   Domain {
     domain: null,
     _events: { error: [Function: debugDomainError] },
     _eventsCount: 1,
     _maxListeners: undefined,
     members: [] } }

4- to see
in mongo command
db.person.find({})

5- collections are important part of this exercise
to be completed……

6- Robo 3T  is a visual MongoDB database (very useful)

https://robomongo.org/

-------
