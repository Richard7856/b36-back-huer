const bcrypt = require('bcrypt');
const { getPersonByEmail } = require('../services/PersonService');
const createToken = require('./createToken');

const authenticate = ({email, password }) =>{
    return new Promise((resolve, reject) => {
        getPersonByEmail(email).then( user => {
            if(!user) reject(new Error('Person not exist'));
            bcrypt.compare(password, user.password, (err, isValid) => {
                if(err) reject(new Error('Error to compare'));
                isValid ? resolve(createToken(user))
                    : reject(new Error('Incorrect Password'));
            });
        });
    });
};

module.exports = authenticate;


