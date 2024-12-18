const Room = require('../models/RoomModel');

const getRooms = async (type=null, availability=null, fromPrice=null, toPrice=null) => {
    const filter = {};
    if (type) filter.type = type;
    if (availability !== null) filter.availability = availability;
    if (fromPrice !== null || toPrice !== null) {
        filter.pricePerNight = {};
        if (fromPrice !== null) filter.pricePerNight.$gte = fromPrice;
        if (toPrice !== null) filter.pricePerNight.$lte = toPrice;
    }
    
    return await Room.find(filter);
}

const getRoom = async (id) => {
    const room = await Room.findById(id);
    if (!room) {
        throw new Error('Room not found');
    }
    return room;
}

const createRoom = async (input) => {
    const room = new Room(input);
    return await room.save();
}

const updateRoom = async (id, update) => {
    const room = await Room.findById(id);
    if (!room) {
        throw new Error('Room not found');
    }
    return await Room.findByIdAndUpdate(id, update, { new: true });
}

const deleteRoom = async (id) => {
    const room = await Room.findById(id);
    if (!room) {
        throw new Error('Room not found');
    }
    return await Room.findByIdAndDelete(id);
}

module.exports = {
    getRooms,
    getRoom,
    createRoom,
    updateRoom,
    deleteRoom
}