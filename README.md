# E-Commerce Back End

## Description

This application simulates a working back-end for an e-commerce site. Via Express.js API the app uses Sequalize to interact with a MySQL database. APP provides GET, POST, PUT and DELETE API routes for categoies, Products, and Tags

[Github Repo](https://github.com/ZellyB/E-commerce-Back-End)

[Application Walkthrough Video](https://drive.google.com/file/d/1WvUhwilA5j7ND49fnLICLS9bPtpkanEn/view)

## Usage

- To begin create a New Directory and clone this Repository into it `git@github.com:ZellyB/E-commerce-Back-End.git`.
- navigate into directory and run command `npm i` to install dependencies.
- Using MySQL workench or MySQL CLI create a new databse called `ecommerce_db` ***MySQL must be installed on local machine 
- To populate database run command `npm run seed`
- Store enviorment variables using a .env file with this variable declaration ` DB_URI="mysql://root:password@localhost:3306/ecommerce_db" `  ***Substitute password for your MySQL database password 
- Run application using command `npm start`

Because the application has no front end, you can test route functionality using an API client such as Postman or Insomnia

## Credit

Starter code provide by edX Boot Camps

Made functional by kelly b
