const { createBlog, updateBlog, deleteBlog } = require('../../services/BlogService');
const storage = require('../../utils/storage');

const createNewBlog = async ( _, { data }, { user }) => {
    data.person = user._id;
    if (data.cover) {
        const { createReadStream } = await data.cover;
        const stream = createReadStream();
        const image = await storage({ stream });
        console.log(image);
        data = {
            ...data,
            cover: image.url,
        };
    }

    const blog = await createBlog(data);
    user.blogs.push(blog);
    user.save();
    return blog;
};

const updateOneBlog = async (_, { id, data }, { user }) => {
    data.person = user._id;
    if (data.cover) {
        const {
            createReadStream
        } = await data.cover;
        const stream = createReadStream();
        const image = await storage({
            stream
        });
        console.log(image);
        data = {
            ...data,
            cover: image.url,
        };
    }
    const blog = await updateBlog(id, data);
    if(!blog) throw new Error('blog not exist');
    return blog;
};

const deleteOneBlog = async (_, { id }) => {
    const blog = await deleteBlog(id);
    if (!blog) throw new Error('Blog not exist');
    return 'Blog deleted';
};

module.exports = {
    createNewBlog,
    updateOneBlog,
    deleteOneBlog
};
