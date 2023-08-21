let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbconnection'); 
let router = require('./routers/router'); 
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Danny6224:1234@cluster0.w7zsrg9.mongodb.net/?retryWrites=true&w=majority";
//let collection;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

app.listen(port, ()=>{
    console.log('express server started');
    //runDB();
});

//app.post('/api/cat', (req,res)=>{
    // let cat = req.body;
    // console.log(cat);
    // insertCat(cat, (err,result) => {
    //     if(!err){
    //         res.json({statusCode:201,data:result,message:'success'});
    //     }
    // });
//});

//app.get('/api/cats', (req,res)=>{
    // getAllCats((err,result)=>{
    //     console.log(result);
    //     if(!err){
    //         res.json({statusCode:200,data:result,message:'success'});
    //     }
    // });
//});


// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

// async function runDB() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//     //   await client.connect();
//       //collection = client.db().collection('Cats');
//       console.log(collection);
//     } catch (ex) {
//         console.error(ex);
//     }
// }

// function insertCat(cat,callback) {
//     collection.insertOne(cat,callback);
// }

// function getAllCats(callback){
//     collection.find({}).toArray(callback);
// }