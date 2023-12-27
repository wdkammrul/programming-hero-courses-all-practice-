const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// kamrulislam
// MOrcvFZZAJsSJ6CK

const uri =
  "mongodb+srv://kamrulislam:MOrcvFZZAJsSJ6CK@cluster0.88bueor.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // step-5
    // const database = client.db('usersDB');
    // const userCollection = database.collection("users");

    // step-5
    const userCollection = client.db("usersDB").collection("users");


    // step-9 next step-10 client site main.jsx
    app.get("/users", async (req, res) => {
      const cursor = await userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });


    // step-24 next step-25 client site main.jsx
    app.get('/users/:id', async (req, res) => {
      const id = req.params.id; 
      const query = {_id: new ObjectId(id)}
      const user = await userCollection.findOne(query);
      res.send(user)
    })

    // step-3 next step-4 client site
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("new user", user);

      //  step-6
      // const result = await userCollection.insertOne(user);
      // res.send(result);

      // step-6 next step-7 clint site
      const result = await userCollection.insertOne(user);
      res.send(result);
    });


    // step-29 next step-30 client site update.jsx
    app.put('/users/:id', async(req, res) =>{
      const id = req.params.id;
      const user = req.body;
      console.log(id, user);

      // step-33 
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true}
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email
        }
      }

      // step-34 
      const result = await userCollection.updateOne(filter, updatedUser, options);
      res.send(result)
    })


    // step-15 next step-16 client site Users.jsx 
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log("please delete from database", id);

      // step-17 next step-18 client site users.jsx
      // step-19 next-step-20 client site users.jsx
      const query = {_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query)
      res.send(result)
     
    });



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("SIMPLE CRUD IS RUNNING");
});

app.listen(port, () => {
  console.log(`SIMPLE CRUD IS RUNNING ON PORT, ${port}`);
});
