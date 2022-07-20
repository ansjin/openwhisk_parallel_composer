'use strict';
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

async function main(params) {

    let product_id_given = params["product_id"];
    let mongo_host_ip = params["mongo_host_ip"];
    let db_name = params["db"];
    let collection_name = params["collection"];
    let mongo_user = params["mongo_user"];
    let mongo_pass = params["mongo_pass"];
    if (product_id_given && mongo_host_ip && db_name && collection_name && mongo_user && mongo_pass) {

        let url = 'mongodb://' + mongo_user + ':' + mongo_pass + '@' + mongo_host_ip + ':27017?authMechanism=SCRAM-SHA-1&authSource=ccs';
        let client, db;
        try {
            client = await MongoClient.connect(url, {useNewUrlParser: true});
            db = client.db(db_name);
            let dCollection = db.collection(collection_name);
            let result = await dCollection.findOne({product_id: product_id_given});
            
            return {"product_name": result.product_name};
        } catch (err) {
            console.log("err", err);
            return {"product_name_err": "error, check logs"};
        } // catch any mongo error here
        finally {
            client.close();
        } // make sure to close your connection after

    } else {
        return {"product_name_err": "Id or mongo host IP address or db or collection name or mongo_user or mongo_pass  is not provided"};
    }
}
