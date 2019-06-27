const {MongoClient} = require("mongodb");

MongoClient.connect("mongodb://synergy:krsna123@ds117316.mlab.com:17316/db_name",{ useNewUrlParser: true }, (err, db)=>{
    if(err) {
        console.log(err)
        process.exit(1);
    }
    console.log("Mongo Connect")
    const _db = db.db("db_name");
    _db.collection("users").insert({"username" : "Foo", "age" :24})
        .then(res => {
            console.log("[CREATED]", res)
        })
        .catch(err => console.log(err))

})

