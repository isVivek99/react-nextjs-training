import { default as mongoose } from 'mongoose';
import app from './server.js';
import dotenv from 'dotenv';
dotenv.config();

const port = 4000;

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://vivek_8411:wLSIcD05yGu2vrxV@cluster0.ustdeh5.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('connected to database');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDatabase();

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
