//importing express module
const exp=require('express')

//creating a mini application
const userExpApp=exp.Router();

//exporting to main server file
module.exports=userExpApp;

//body parsing
userExpApp.use(exp.json())

//getting db url
const dbUrl = 'mongodb://vchanti679:9393490610@cluster0-shard-00-00-hfzzf.gcp.mongodb.net:27017,cluster0-shard-00-01-hfzzf.gcp.mongodb.net:27017,cluster0-shard-00-02-hfzzf.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'

var dbo;

//importing mongodb module
const mc = require('mongodb').MongoClient

//connecting to database
mc.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, (err, clientObj) => {
    if (err) {
        console.log('err in connecting', err)
    }
    else {
        dbo = clientObj.db('Imsdb')
    }
})

userExpApp.get('/readattd/:bn', (req, res) => {
    var bno = (req.params.bn)
    dbo.collection('attendence').find({ batchno: bno }).toArray((err, stdAttd) => {
        if (err) {
            console.log('err in find', err)
        }
        else if (stdAttd.length == 0) {
            res.send({ message: 'no std data found' })
        }
        else {
            res.send({ message: stdAttd })
        }
    })
})

userExpApp.get('/readmarks/:bn', (req, res) => {
    var bno = (req.params.bn)
    dbo.collection('marks').find({ batchno: bno }).toArray((err, stdmarks) => {
        if (err) {
            console.log('err in find', err)
        }
        else if (stdmarks.length == 0) {
            res.send({ message: 'no std data found' })
        }
        else {
            res.send({ message: stdmarks })
        }
    })
})

userExpApp.get('/userdetails/:id', (req,res)=>{
    
    dbo.collection('collection1').findOne({imsid:req.params.id},(err,detls)=>{
        if(err){
            console.log('err in find',err)
        }
        else(
            res.send({message:detls})
        )
    })
})