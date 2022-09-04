import { default as mongoose } from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: false,
  },
});

const model = mongoose.model('Post', postSchema);
export default model;
