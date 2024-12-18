const BookingService = require('../services/BookingService');

const resolvers = {
    Query: {
        bookings: (_, args) => BookingService.getBookings(args.status),
        booking: (_, args) => BookingService.getBooking(args._id),
    },
    Mutation: {
        createBooking: (_, args) => BookingService.createBooking(args.booking),
        updateBooking: (_, args) => BookingService.updateBooking(args._id, args.update),
        deleteBooking: (_, args) => BookingService.deleteBooking(args._id),
    },
};

module.exports = resolvers;