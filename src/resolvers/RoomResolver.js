const RoomService = require('../services/RoomService');

const resolvers = {
    Query: {
        rooms: () => RoomService.getRooms(),
        room: (_, args) => RoomService.getRoom(args._id),
    },
    Mutation: {
        createRoom: (_, args) => RoomService.createRoom(args.room),
        updateRoom: (_, args) => RoomService.updateRoom(args._id, args.update),
        deleteRoom: (_, args) => RoomService.deleteRoom(args._id),
    },
};

module.exports = resolvers;