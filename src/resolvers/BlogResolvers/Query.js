const { getAllBlogs, getOneBlog} = require('../../services/BlogService');

const getBlogs = async () => {
    const blogs = await getAllBlogs();
    return blogs;
};

const getSingleBlog = async (_, { id }) => {
    const blog = await getOneBlog(id);
    if(!blog) throw new Error('blog not exist');
    return blog;
};

module.exports = {
    getBlogs,
    getSingleBlog
};
