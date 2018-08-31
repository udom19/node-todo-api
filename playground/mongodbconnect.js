const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/TodoApp";

// db name TodoApp

MongoClient.connect(url, (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }else{
        console.log("Connected to MongoDB server");
    }

    const mydb = db.db('TodoApp');
    mydb.collection("Users").insertOne({
        name: 'Jerry Paulinus',
        age: 31,
        location: 'Jos'
    }, (err, result) =>{
        if(err){
            return console.log('Unable to insert todos', err);
        }else{
            console.log((result.ops));
        }
    });

    db.close();
});