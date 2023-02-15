const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to db");
    }

    const db = client.db(databaseName);

    db.collection("users")
      .deleteOne({ name: "blabla" })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
);
