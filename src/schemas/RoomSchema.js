const { gql } = require("apollo-server");

const { TYPE } = require("../utils/enums");

const typeDefs = gql`

    enum TYPE {
        ${Object.values(TYPE).join("\n")}
    }

    type Room {
        _id: ID
        name: String
        type: TYPE
        pricePerNight: Float
        features: [String]
        availability: Boolean
    }

    input RoomInput {
        name: String!
        type: TYPE!
        pricePerNight: Float!
        features: [String]
        availability: Boolean
    }

    input RoomUpdateInput {
        name: String
        type: TYPE
        pricePerNight: Float
        features: [String]
        availability: Boolean
    }
    type Query { 
        rooms(type: TYPE, availability: Boolean, fromPrice: Float, toPrice: Float): [Room]
        room(_id: ID!): Room
    }

    type Mutation {  
        createRoom(room: RoomInput): Room  
        updateRoom(_id: ID!, update: RoomUpdateInput): Room
        deleteRoom(_id: ID!): Room
    }
`;

module.exports = typeDefs;
