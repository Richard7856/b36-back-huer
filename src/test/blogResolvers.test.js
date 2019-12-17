/* eslint-disable no-undef */
const { graphql } = require('graphql');
const { schema } = require('../../index');
const { createPerson} = require('../services/PersonService');
const sepUpTest = require('./helpers');

const MUTATION_ADD_BLOG = `

    mutation addPost($data:BlogInput!){
        createNewPost(data:$data){
            _id
            title
            person{
                email
            }
        }
    }
`;

describe('Test Create Blog Mutation', () => {
    beforeEach(async () => await sepUpTest());

    it('Should Create Post', () => {
        const makeTest = async () => {
            const person = {
                first_name: 'prueba',
                last_name: 'prueba0',
                email: 'prueba@prueba.com',
                password: 'prueba'
            }; 
            const data = {
                title: 'Blog 1',
                content: 'Contenido'
            };

            const user = await createPerson(person);
            graphql(schema, MUTATION_ADD_BLOG, null, { user }, { data })
                .then( res => {
                    expect(res.data.createNewBlog.person).toHaveProperty('email', data.email);
                    expect(res.data.createNewBlog.person).toHaveProperty('_id');
                });
        };

        makeTest();
    });

    it('Should not Create a Blog', () => {
        const makeTest = async () => {
            const person = {
                firs_name: 'prueba',
                last_name: 'prueba',
                email: 'prueba@prueba.com',
                password: 'prueba'
            };
            const data = {
                content: 'pruebaaaaaa'
            };

            const user = await createPerson(person);
            graphql(schema, MUTATION_ADD_BLOG, null, { user }, { data })
                .then( res => {
                    expect(res).toHaveProperty('errors');
                });
        };

        makeTest();
    });
});