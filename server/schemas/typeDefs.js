const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        categoryName: String
    }
    
    type Request {
        _id: ID
        category: Category
        title: String
        description: String
        details: String
        createdAt: String
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
        catrequests(category: ID!): [Request]
        user(userId: ID!): User
    }

    type Mutation {
        addRequest(title: String!, description: String!, details: String!, category: ID!): Request
        updateRequest(description: String! details: String!): Request
        deleteRequest(requestId: ID!): Request
        addUser(email: String!, username: String!, password: String!): User
        updateUser(email: String!): User
        deleteUser(userId: ID!): User
    }
`;

module.exports = typeDefs;
