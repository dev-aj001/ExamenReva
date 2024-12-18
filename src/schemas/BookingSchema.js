const { gql } = require("apollo-server");

const { STATUS } = require("../utils/enums");

const typeDefs = gql`

    scalar Date

    enum STATUS {
        ${Object.values(STATUS).join("\n")}
    }

    type Customer {
        _id: ID
        name: String
        email: String
        password: String
        phone: String
    }

    type Room {
        _id: ID
        name: String
        type: TYPE
        pricePerNight: Float
        features: [String]
        availability: Boolean
    }


    type Booking {
        _id: ID
        customer: Customer
        room: Room
        startDate: Date
        endDate: Date
        nights: Int
        totalPrice: Float
        status: STATUS
    }

    input BookingInput {
        customer: ID!
        room: ID!    
        startDate: Date!
        endDate: Date!
        status: STATUS
    }

    input BookingUpdateInput {
        customer: ID
        room: ID
        startDate: Date
        endDate: Date
        nights: Int
        totalPrice: Float
        status: STATUS
    }

    type Query { 
        bookings: [Booking]
        booking(_id: ID!): Booking
    }

    type Mutation {
        createBooking(booking: BookingInput!): Booking
        updateBooking(_id: ID!, update: BookingUpdateInput!): Booking
        deleteBooking(_id: ID!): Booking
    }
`;

module.exports = typeDefs;