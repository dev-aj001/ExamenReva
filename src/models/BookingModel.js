const mongoose = require('mongoose');

const { STATUS } = require('../utils/enums');

const BookingSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    nights: {
        type: Number
    },
    totalPrice: {
        type: Number
    },
    status: {
        type: String,
        enum: Object.values(STATUS),
        default: STATUS.PENDING
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;