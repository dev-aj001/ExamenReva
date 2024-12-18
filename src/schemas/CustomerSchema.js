const { gql } = require("apollo-server");


const typeDefs = gql`

    type Customer {
        _id: ID
        name: String
        email: String
        password: String
        phone: String
    }

    input CustomerInput {
        name: String!
        email: String!
        password: String!
        phone: String!
    }

    input CustomerUpdateInput {
        name: String
        email: String
        password: String
        phone: String
    }

    type Query { 
        customers: [Customer]
        customer(_id: ID!): Customer
    }

    type Mutation {  
        createCustomer(customer: CustomerInput): Customer  
        updateCustomer(_id: ID!, update: CustomerUpdateInput): Customer
        deleteCustomer(_id: ID!): Customer
    }
`;

module.exports = typeDefs;
