const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://loginadmin:ti0DFwGJ2Srrrd9f@cluster0.ara4x.mongodb.net/test";
const client = new MongoClient(url);

// The database to use
const dbName = "LoginApp";

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        // Use the collection "people"
        const col = db.collection("LoginApp");
        // Construct a document                                                                                                                                                              
        let personDocument = {
                "name": { "first": "Alan", "last": "Turing" },
                "email": "shahinkgc84@gmail.com", // June 23, 1912 
                "password": "123"
            }
            // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(personDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);