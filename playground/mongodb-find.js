// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");
const url = "mongodb://localhost:27017/TodoApp";

// db name TodoApp

MongoClient.connect(url, (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
        console.log("Connected to MongoDB server");


        const mydb = db.db('TodoApp');
        mydb.collection('Users').find({location: 'Jos'}).toArray().then((docs) =>{
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) =>{
            console.log('Unable to fetch todos', err);
        });

     // db.close();
});