const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
// Importar los esquemas y resolvers
const RoomTypeDefs = require('./schemas/RoomSchema');
const RoomResolvers = require('./resolvers/RoomResolver');
const CustomerTypeDefs = require('./schemas/CustomerSchema');
const CustomerResolvers = require('./resolvers/CustomerResolver');
const BookingTypeDefs = require('./schemas/BookingSchema');
const BookingResolvers = require('./resolvers/BookingResolver');

const startServer = async () => {
  // Conectar a MongoDB
  await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0');

  const server = new ApolloServer({
    typeDefs: [RoomTypeDefs, CustomerTypeDefs, BookingTypeDefs],
    resolvers: [RoomResolvers, CustomerResolvers, BookingResolvers],});
  
     // Iniciar el servidor Apollo
  const { url } = await server.listen({ port });
  console.log(`🚀 Server running at: ${url}`);
    
};

startServer();
