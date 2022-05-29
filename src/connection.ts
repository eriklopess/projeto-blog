import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://localhost:27017/blog';

const connectDatabaseURI = () => mongoose.connect(MONGO_DB_URL);

export default connectDatabaseURI;
