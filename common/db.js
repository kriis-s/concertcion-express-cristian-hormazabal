import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://admconcertcion:9Tkjj8hURlIHzSqf@ac-wlhjb9x-shard-00-00.ivjc0hb.mongodb.net:27017,ac-wlhjb9x-shard-00-01.ivjc0hb.mongodb.net:27017,ac-wlhjb9x-shard-00-02.ivjc0hb.mongodb.net:27017/concertcion?tls=true&replicaSet=atlas-8p86m5-shard-0&authSource=admin&retryWrites=true&w=majority&appName=concertcion-cl0";

const client = new MongoClient(uri);

export default client;
