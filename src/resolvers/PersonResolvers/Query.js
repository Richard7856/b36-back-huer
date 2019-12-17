const { getAllPersons, getOnePerson } = require('../../services/PersonService');

const getPersons = async () => {
    const persons = await getAllPersons();
    return persons;
};

const getSinglePerson = async (_, { id }) => {
    const person = await getOnePerson(id);
    if(!person) throw new Error('Person not exist');
    return person;
};

const me = async (_, __, {user}) => {
    return user;
};

module.exports = {
    getPersons,
    getSinglePerson,
    me,
};

