# RESTful-Web-Services-with-Node.js-and-Express
[Pluralsight] RESTful Web Services with Node.js and Express [ENG, 2h 4m, 2015]


### 01. What Is REST

    npm install express --save
    npm install gulp -g
    npm install gulp-nodemon --save
    gulp


### 02. Getting Data | 02_02-Implementing HTTP Get

http://localhost/api/books/


### 02. Getting Data | 02_03-Wiring up to MongoDB and Mongoose

    npm install mongoose --save

http://localhost/api/books/


### 02. Getting Data | 02_04-Filtering with the Query String

http://localhost/api/books?genre=Science Fiction


### 02. Getting Data | 02_05-Getting a Single Item

http://localhost/api/books/{id}


### 03. Posting Data | 03_02-Using Bodyparser

    npm install body-parser --save

### 03. Posting Data | 03_03-Testing with Postman

POSTMAN

POST -> localhost:8080/api/books/

Content-Type: Application/json

raw

{
    "title": "My New Book",
    "genre": "Fiction",
    "author": "Jon Mills"
}


### 03. Posting Data | 03_04-Saving Data

Same on the previous step and:

POST -> localhost/api/books/553f67eeccaee53c0501de36
