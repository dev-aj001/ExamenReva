const Booking = require('../models/BookingModel');
const Customer = require('../models/CustomerModel');
const Room = require('../models/RoomModel');

const getBookings = async (status = null) => {
    if(status) {
        return await Booking.find({ status }).populate('customer').populate('room');
    }
    return await Booking.find().populate('customer').populate('room');
}

const getBooking = async (id) => {
    const booking = await Booking.findById(id).populate('customer').populate('room');
    if (!booking) {
        throw new Error('Booking not found');
    }
    return booking;
}

const createBooking = async (input) => {
    const customer = await Customer.findById(input.customer);
    if (!customer) {
        throw new Error('Customer not found');
    }
    const room = await Room.findById(input.room);
    if (!room) {
        throw new Error('Room not found');
    }

    if(room.availability === false) {
        throw new Error('Room is not available');
    }

    const startDate = new Date(input.startDate);
    const endDate = new Date(input.endDate);
    const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * room.pricePerNight;

    if(nights < 0) {
        throw new Error('Invalid dates');
    }

    const overlapBookings = await Booking.find({
        room: input.room,
        $or: [
            { startDate: { $lte: endDate }, endDate: { $gte: startDate } },
        ],
    });

    if (overlapBookings.length > 0) {
        throw new Error('Room is not available for the selected dates');
    }

    if(nights > 7) {
        totalPrice *= 0.9;
    }

    input.nights = nights;
    input.totalPrice = totalPrice;

    const booking = new Booking(input);
    return await booking.save();
}

const updateBooking = async (id, update) => {
    const booking = await Booking.findById(id);
    if (!booking) {
        throw new Error('Booking not found');
    }
    return await Booking.findByIdAndUpdate(id, update, { new: true });
}

const deleteBooking = async (id) => {
    const booking = await Booking.findById(id);
    if (!booking) {
        throw new Error('Booking not found');
    }
    return await Booking.findByIdAndDelete(id);
}

module.exports = {
    getBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking
}