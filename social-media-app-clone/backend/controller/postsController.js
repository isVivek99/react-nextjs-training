import Post from '../models/post.js';

//get posts from db
export const loadPosts = async (req, res) => {
  const posts = await Post.find();
  return res.status(200).json({ posts });
};

//register file url
export const registerPost = async (req, res) => {
  const { title, subTitle, url } = req.body;

  if (!title || !subTitle || !url)
    return res.status(422).json({ error: 'please add all fields' });

  const post = await Post.create({
    title,
    subTitle,
    url,
  });

  if (post) return res.status(201).json({ message: 'url added' });
};
