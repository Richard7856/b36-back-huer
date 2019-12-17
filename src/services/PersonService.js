const { Persons } = require('../models');

const createPerson = (data) => Persons.create(data);

const getAllPersons = () => Persons.find({
    is_active: true
}).populate({
    path: 'blogs',
    model: 'blogs'
});
const getOnePerson = (id) => Persons.findById({
    _id: id,
    is_active: true
}).populate({
    path: 'blogs',
    model: 'blogs'
});

const deletePerson = (id) => Persons.findByIdAndUpdate({
    _id: id,
    is_active: true,
}, {
    is_active:false,
});

const updatePerson = (id, data) => Persons.findByIdAndUpdate({
    _id: id,
    is_active: true,
}, {
    ...data,
}, { new:true });

const getPersonByEmail = (email) => Persons.findOne({
    email,
    is_active: true
}).populate('blogs');

module.exports = {
    getAllPersons,
    getOnePerson,
    deletePerson,
    updatePerson,
    getPersonByEmail,
    createPerson,
};
