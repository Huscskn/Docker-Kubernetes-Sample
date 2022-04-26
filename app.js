const fastify = require('fastify')({ logger: true })
const {
    MongoClient,
    ObjectId
} = require('mongodb');
require("dotenv").config();
const connString = process.env.MONGODB_CONNSTRING;
fastify.get("/",(request,reply) => {
    reply.send({status:"ok"});
})
fastify.get("/test", async (request,reply) => {
    try{
        const client = new MongoClient("mongodb://root:root@mongodb:27017");
        await client.connect();
        const db = client.db("test");
        const collection = db.collection('project');
        await collection.insertOne({name:"a",surname:"b"});
        reply.send({comeon:"yes"});
    }catch(err){
        reply.send(err);
    }

})
fastify.get("/gtest", async (req,res) => {
    const client = new MongoClient("mongodb://root:root@mongodb:27017");
    await client.connect();
    const db = client.db("test");
    const collection = db.collection('project');
    let data = await collection.find({}).toArray();
    res.send(data);
})
const start =  () => {
    try {
       fastify.listen(8080,'0.0.0.0')
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()