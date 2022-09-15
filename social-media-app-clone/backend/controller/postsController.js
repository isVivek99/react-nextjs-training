import Post from '../models/post.js';

//get posts from db
export const loadPosts = async (req, res) => {
  console.log(req.query);
  const pageNumber = req.query.page;
  let postsPerPage = 3;

  const posts = await Post.find()
    .skip((pageNumber - 1) * postsPerPage)
    .limit(postsPerPage);
  return res.status(200).json({ posts });
};

//register file url
export const registerPost = async (req, res) => {
  const { title, subTitle, url } = req.body;

  try {
    if (!title || !subTitle || !url)
      return res.status(422).json({ error: 'please add all fields' });

    const post = await Post.create({
      title,
      subTitle,
      url,
    });

    if (post) return res.status(201).json({ message: 'url added', data: post });
  } catch (error) {
    return res.json(error.message);
  }
};
