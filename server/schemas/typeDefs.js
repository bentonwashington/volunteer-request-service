const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Request {
        _id: ID
        title: String
        description: String
        details: String
        category: Category
    }

    type Category {
        _id: ID
        categoryName: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Query {
        requests: [Request]
        categories: [Category]
        catrequests(category: String): [Request]
        user(id: ID!): User
    }

    type Mutation {
        addRequest(title: String!, description: String!, details: String!, category: String!): Request
        updateRequest(description: String! details: String!): Request
        deleteRequest(id: ID!): Request
        addUser(email: String!, username: String!, password: String!): User
        updateUser(email: String!): User
        deleteUser(id: ID!): User
    }
`;

module.exports = typeDefs;
