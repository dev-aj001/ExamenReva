const mongoose = require('mongoose');

const TYPE = {
    SINGLE: 'single',
    DOUBLE: 'double',
    SUIT: 'suit',
}

const RoomSchema = new mongoose.Schema({
    name: String,
    type: {
        type: String,
        enum: Object.values(TYPE),
        default: TYPE.SINGLE
    },
    pricePerNight: Number,
    features: [String],
    availability: {
        type: Boolean,
        default: true
    },
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;