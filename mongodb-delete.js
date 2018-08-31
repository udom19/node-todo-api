// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");
const url = "mongodb://localhost:27017/TodoApp";

// db name TodoApp

MongoClient.connect(url, (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
        console.log("Connected to MongoDB server");

        // Delete Many
        // const mydb = db.db('TodoApp');
        // mydb.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) =>{
        //     console.log(result);
        // });

        // Delete One
        const mydb = db.db('TodoApp');
        mydb.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
            console.log(result);
        });

     // db.close();
});