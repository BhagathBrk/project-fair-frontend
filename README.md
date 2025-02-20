
steps to build MERN project
==============================

1. Create vite react app for front end 
2. Remove the unwanted codes from App.css, index.css, App.jsx files
3. Install css styling library
4. Create pages folder for different pages of react app, inside we create component file
5. Set up the path/URL/route for each pages of react app
6. Create component folder for holding part of different pages of react app inside we create component file 
7. Style all component
8. Setup API call in react app: npm i axios

        - create a service folder in src folder. create 3 files, commonAPI , serverUrl(js files)
        - 













context API - Data sharing in react
===================================

- avoid props drilling while sharing data between components
- to share data it uses context of react, with the help of context we can share data inside
- steps to perform context api
    - create context : use CreateContext ()
    - use provider of context to share data to the components, provider value key will help context form component: use useContext(context_name) hook we get data shared via context
- create a folder for contexts
    - inside folder create react component for perform data sharing using context
    - create context and export it
    - create  state inside component
    - use context provider provide the state as its value to the component children 
    - use children props inside the component to get all children of it
    - wrap the component inside root component of react app inside main.jsx file




        mongoDB Database
        ======================

1. DATABASE used to store and manage data permanently (fireBase, AWS, mySQL, SQL, MSAccess, mongoDB, Oracle...)
2. MongoDB is a noSQL database where data store as json documents it stored in memory as BSON(binary script object notation) ({"key": value}), to store multiple json document is known as Collection
3. Difference between SQL and mongoDB 

                 SQL                                                 MongoDB
        ==============================                   ===============================

        1. Relational SQL DBMS                      1. Document oriented NoSQL DBMS (database management system)
        2. data stored in table, every              2. data stored in collection, as JSON document
        table must have rows and fixed columns
        3. uses fixed schema                        3. uses dynamic schema
        4. support rich set of datatypes            4. limited set of datatypes
        5. uses in traditional business app         5. used in big data and realtime app
        6. optimized for complex join &             6. optimized for scalability and performance
            transaction


4. monogoDB in the following environment: 
    
    -MongoDB Atlas: The fully managed service for MongoDB deployments in the cloud
    -MongoDB Enterprise: The subscription-based, self-managed version of MongoDB
    -MongoDB Community: The source-available, free-to-use, and self-managed version of MongoDB

5. mongoDB shell / mongosh : is terminal used to write/run mongodb codes
6. collection : used to store json documents, to name a collection use only small letters and its pural format
7. mongoDB generate a unique value to identify each collection using " _id " key its value is a hexadecimal number

8. CRUD operations performed in mongoDB:

    - show collections command is used to display all collections
    - To get/read a single document from mongoDB collection: use findOne({key: value}) this will return the entire document when the key and 
      value  is present in collection otherwise returns null
    - find() : to get all document in the collection
    - insertOne({}) : used to inset one data into collection
    - insertMany([{key:value}, {key:value}.....]) :- to insert multiple document to collection
    - countDocument() : used to get total count of datas in the collection
    - limit(count) : to limit documents while getting from a database
        eg: db.collectionName.find().limit(3)

    - skip(count) : to skip datas while getting from a collection, skip amount of data in count and display rest 
    - sort({key: 1(ascending)/-1(descending)}) : used to sort datas while getting from a collection
    - find({key: {$gt/ $lt/ $lte / $gte/ $eq/ $neq/ $exists/ $regex : value}})  - regex regular expression
        eg: db.collectionName.find({age:{$lt: 30}})

        updating in mongoDB
        ======================

- updateOne({key:value}, {$set: {key: value}}) : to update a single document in mongoDB collection
- we can update statements like : $set (to update data), $inc (used for incrementing, -ve values for decrementing), $push (to add data), $pull
- deleteOne({key:value}) : used to delete a single document 
- deleteMany([{key:value}]) : used to delete multiple documents


9. Aggregation: used to combine/joining two collection in mongodb

    using lookup:

         {
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}



                 Node JS
========================================

1. Node js provides a runtime environment outside the browser.
2. free open source, cross platform runtime enviroment that lets us to create servers (used to resolve multiple client requests)
- we can create web app, command line tools and scripts 

    features of node js
    ------------------

- extremly fast 
- highly scalable (can handle huge amount of data )
- Can handle asyncronous functions

3. node js global objects (can be used anywhere without importing) : objects canbe accessed througout node app without importing it. eg: "process"
 - "environmental variable" in process used to store system configuration / secret data / password of an application 
4. Node js module system: used to share data from one file to another file, using "CommonJSModule" system
    - require("package_name/file_path") : to import data from one file/ package to another 
    - module.exports / exports keyword : used to export data from a file

    - Predefined/ Built in moduledd in node js :

            - fs module : file system module, handles file system of a computer
            - http module : used to create http servers 
            - https module : used to create https servers
            - events module : manage user defined events
            - crypto module : used to handle secure data 

5. Execution model : Event driven, non blocking I/O model, optimised Asynchronous task
6. API Access : access to system level API (file system, network, process)

7. Working of Node JS:

    - no delay in handling functions
    - non blocking and can handle asynchronous functions
    


    EXPRESS JS is a framework of Node JS
    ====================================

- Express js used for server creation with all features of node js
- steps to create express server:

    1. Create a Server folder
    2. create package.json file inside folder : npm init -y
    3. Update json file "script key" value as the following object, 
        {"start" : "node index.js"} and remove test key and value from it
    4. install necessary packages
    5. express package : used to create server - npm i express
    6. cors package: used to enable cross origin resource sharing - npm i cors
    7. dotenv package : used to load content .env file into process object: npm i dotenv
    - install mongoose package
    8. create .env file in server folder, which is used to store enviromental variables of a app
    9. create .gitignore used to store files to be ignored while adding to git and add node_modules and, .env
    10. create index.js file to define express server
    11. import express, dotenv and cors in index.js file
    - create a express server using express package
    - use cors in our server app, to enable data sharing between different applications.
    - use express.json() in derver app for parsing json data from client request
    - create a port for server app
    - run server app in specified port 
    - run server using command: node index.js

    - to resolve http request using express server:
        - express_server_name.httpRequestMethod("path", (request, response)=>{
            using response object share server response to client
        })
    - server has to use express.static('static file/folder name') to export the static file/folder from server



    - How to set up path /URLfor client request server 

        -Create routes folder in derver folder and can create a js file inside the routes folder for defining path/route corresponding to client request
        - define path in js file

        - import express
        - create an object for express router class which is capable of setting up routes in server
        - export the object of express classs
        - import object of express Router class and use router in server application 
        - to set up route :
            - RouterObject.httpRequestmethod('/path', controllerName)

                - To set up controller for server app: used to define logic to resolve client request
                - create a folder controllers and create a .js file inside it

                - export each controller logic from js file
                - import sontroller in router.js file and use the controller in corresponding request
                - syntax of controller:
                    - controllerName = (request, response)=> {
                        using response object share server response client
                    }

            -to set up database connection from Nodejs server
                - create a folder for defining db connection in server folder 
                - inside db folder create js file to define connection steps
                    - import mongoose
                    - get db connection string from mongoDB atlas
                    - to connect with mongodb use connect method of mongoose pass connection string as argument, it will return a promise
                    - import js file in index.js file

                - To set model for communicating node js and mongodb
                    - create model folder in server folder
                    - create js file inside the folder for creating model
                    - create model using schema
                    - export model 
                - To set up Authorization using middleware 
                    - create folder for middleware in server folder
                    - create a js file inside folder to define middleware, export middleware
                    - use middleware in route before the controller
                - To handle mutipart/form request using multer
                    - create a js file inside middleware folder
                    - import multer 
                    - create a 'upload' folder in server for storing uploaded files.
                    - define storage object in js file
                    - created multer instance using the storage and export it from that file and use it in router.js
                



                


            mongoose: node js package for mongodb data modeling
    ==================================================================

1. Mongoose is an ODM (object data modeling) library for MongoDB, helps to create and manage MongoDB documents with node js
2. Install mongoose in node js : npm i mongoose
3. Schema : A schema defines the structure of your collection documents . A mongoose schema maps directly to a mogoDB colledtion .
    To create a schema we have to create a object for mongoose schema 
4. Models take your Schema and it to each document in its collection. create model in mongoose, use model method, syntax: model('modelname', schema)

- Models are responsible for all document interactions like creating, reading, updating and deleting (CRUD).

5. In node js, controller will communicate with model inorder to manage data in mongoDB
6. CRUD operations in mongoose:

    - to create a document using mongoose in mongodb, create an object of model with same order of its schema, after that we have to save the object inorder to appear changes in mongoDB using save() method mongoose

    - Read/get document from mongoDB: find(), findOne, findById()

    - Update a document: updateOne(), updateMany(), findByIdandUpdate(_id of document, update query)

    - Delete document: deleteOne(), deleteMany(), findByIdandDelete(_id of document)

7. Mongoose query helpers: skip(), limit(), sort()




Multer: node js middleware
=========================

- Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

- Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form

- install multer package : npm i multer
- multer can used to define storage space for uploading file





           JWT (json web tokens) Tokens
=============================================

-node js package for authentication
- install jsonwebtoken library in backend : npm i jsonwebtoken
- Token generation using jwt : sign(payload, password)
    - payload is used to store data inside token creation
- Token very 



Middleware : NODE JS
====================

1. used to control request-responde cycle in server, Vefore resolving the requst server can perform any task ( authorization, data format changing etc..) using middleware
2. middleware are function, with 3 arguments, they are request, reponse, next:-

- Here request will give client request 
- response object will give response from server to client
- next method used to control request
3. Middleware can be 2 types:
- application specific middleware: middleware will active for all client request
- Router specific middleware : middleware will active for only selected route/path
- 











mongodb cluster code - mongodb+srv://bhagath7077:bhagathbrk@cluster0.b6ree.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0