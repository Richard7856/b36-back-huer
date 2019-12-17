const { createPerson, updatePerson, deletePerson } = require('../../services/PersonService');
const authenticate = require('../../utils/authenticate');

const createNewPerson = async (_, { data }) => {
    const person = await createPerson(data);
    return person;
};

const updateOnePerson = async (_, { id, data }) => {
    const person = await updatePerson(id, data);
    if(!person) throw new Error('Person not exist');
    return person;
};

const deleteOnePerson = async (_, { id }) => {
    const person = await deletePerson(id);
    if(!person) throw new Error('Person not exist');
    return 'Person deleted';
};
const login = async (_, params) => {
    const token = await authenticate(params).catch(e => { throw e;});
    return {
        token: token,
        message: 'Login Sucessful'
    };
};

module.exports = {
    createNewPerson,
    updateOnePerson,
    deleteOnePerson,
    login,
};
