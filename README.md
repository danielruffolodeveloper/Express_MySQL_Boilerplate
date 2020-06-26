# Node.js MySQL Boilerplate
This repository demonstraites how so spin up a Express/Node.js API and connect it to a MySQL database for the purpose of enabling persistance in a CRUD workflow.
In this repository, I also demonstrate how to setup a docker environment for running the project and build a docker-compose file for spinning up both elements of the project inside docker containers for the benefit of making it much easier to run on your local machine and manage overall. 
The Diagrm below gives you a general idea of what the project looks like and how it accepts HTTP requests and Responses in order to preform CRUD functionality on our MySQL instance. 
The refrence "CRUD" is short for CREATE,READ,UPDATE and DELETE.
This repo is not intended for production deployment straight off the clone but more so a learning resource. I intend to develop it and provide enough functionality to eventually make it a GOTO resource for deploying a architecture like this and explore data replication, pipelines and perhaps even Kubernetes!

![Screenshot](resources/img/1.png)


## Project setup
```
npm install
```

### Run
```
node server.js
```