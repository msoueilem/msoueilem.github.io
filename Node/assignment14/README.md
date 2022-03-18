# Assignment 14 - Implement the MiniBank webapp using NodeJS+Express.JS+Database 

###### System requirement: 
Node js, Express js, pug, Nodemon, mysql2, mysql database 

###### System Set Up Steps 
###### Install Node.js first then cmd Project folder > 
- npm init –y 
(package.json will added to project folder) 

###### Install Express
- npm i - -save express
(node_modules folder will added to project folder)

###### Install Nodemon
- npm install --save-dev nodemon

###### Install PUG
- npm install pug

###### Install MySQL
- npm install mysql2

###### Set Up Database
- Get create database.sql from assignment14\database\

Run sql script in Database Server(MySQL) to create schema and data table \
Schema name: minibank-db\
Table name: account
\
\
Check DB configuration info under db\dbConfig.js


###### Run the App
- npx nodemon index.js

![Minibank App Home Page](https://github.com/tsulai/tsulai.github.io/blob/master/miu-study/cs472-WAP/assignment14/screenshots/home.JPG)

![Minibank App Account Page](https://github.com/tsulai/tsulai.github.io/blob/master/miu-study/cs472-WAP/assignment14/screenshots/account.JPG)



