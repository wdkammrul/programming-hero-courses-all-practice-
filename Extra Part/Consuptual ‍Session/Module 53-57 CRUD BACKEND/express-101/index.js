const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();

// secondproject
// EcGYKAXD0J5ipyZB

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const uri =
  "mongodb+srv://secondproject:EcGYKAXD0J5ipyZB@cluster0.aj9hcpw.mongodb.net/?retryWrites=true&w=majority";

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
    await client.connect();

    // step-4
    const userCollection = client.db("userDB").collection("users");

    // step-5 next step-6 Main.jsx
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      console.log(result);
      res.send(result);
    });



    // delete single user
    // step-13 next step-14 DisplayUser.jsx
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);


      // step-15 next step-16 DisplayUser.jsx
      const query = {
        _id: new ObjectId(id)
      }
      const result = await userCollection.deleteOne(query)
      res.send(result)
    });



    // step-21 updated user next step-22 main.jsx
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);

      const query = {
        _id: new ObjectId(id),
      };
      const result = await userCollection.findOne(query);
      res.send(result);
    });


    //  step-7 next step-8 main.jsx ডেটাগুলো ui তে দেখানোর জন্য গেট করা ।
    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      console.log(result);
      res.send(result);
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
  res.send("Crud is running...");
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
