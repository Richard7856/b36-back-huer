/* eslint-disable no-undef */
const { graphql } = require('graphql');
const { schema } = require('../../index');
const { createPerson } = require('../services/PersonService');
const setUpTest = require('./helpers');

const MUTATION_PERSON = `

    mutation addPerson($data: PersonInput!){
        createNewPerson(data:$data){
            _id
            email
        }
    }

`;

describe('Test Mutation Create Person', () => {

    beforeEach(async () => await setUpTest());

    it('Should create person', () => {

        const makeTest = async () => {
            const data = {
                first_name: 'Prueba',
                last_name: 'prueba',
                email: 'prueba@prueba.com',
                passowrd: 'prueba'
            };

            graphql(schema, MUTATION_PERSON, null, {}, { data })
                .then( response => {
                    expect(response.data.createNewPerson).toHaveProperty('email', data.email);
                    expect(response.data.createNewPerson).toHaveProperty('_id');
                });
        };

        makeTest();
    });

    it('Should not Create an Person', () => {
        const makeTest = async () => {
            const data = {
                first_name: 'Prueba',
                last_name: 'prueba',
                email: 'prueba@prueba.com',
                passowrd: 'prueba'
            };

            await createPerson(data);

            graphql(schema, MUTATION_PERSON, null, {}, {
                data
            })
                .then(response => {
                    expect(response).toHaveProperty('errors');
                });
        };
        makeTest();
    });
});

