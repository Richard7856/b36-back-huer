const Blogs = require('../models/Blog');

const createBlog = async (data) => {
    const blog = await Blogs.create(data);
    const populateBlog = await getOneBlog(blog._id);
    return populateBlog;
};

const getOneBlog = (id) => Blogs.findOne({
    _id: id,
    is_active: true,
}).populate('person');

const getAllBlogs = () => Blogs.find({
    is_active: true,
}).populate('person');

const updateBlog = (id, data) => Blogs.findOneAndUpdate({ _id:id, is_active: true },{ ...data },{ new: true}).populate('person');

const deleteBlog = (id) => Blogs.findOneAndUpdate({
    _id: id,
    is_active: true
}, {
    is_active: false,
});

module.exports = {
    createBlog,
    getOneBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog,
};