const Room = require('../models/RoomModel');

const getRooms = async () => {
    return await Room.find();
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