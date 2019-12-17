const PersonResolver = require('./PersonResolvers');
const BlogResolver = require('./BlogResolvers');
const PlantResolver = require('./PlantResolvers');
const { EmailAddressResolver, URLResolver } = require('graphql-scalars');

module.exports = {
    EmailAddress: EmailAddressResolver,
    URL: URLResolver,
    Query:{
        ...PersonResolver.Query,
        ...BlogResolver.Query,
        ...PlantResolver.Query,
    },
    Mutation:{
        ...PersonResolver.Mutation,
        ...BlogResolver.Mutation,
        ...PlantResolver.Mutation
    }
};
