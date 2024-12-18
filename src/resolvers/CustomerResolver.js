const CustomerService = require('../services/CustomerService');

const resolvers = {
    Query: {
        customers: () => CustomerService.getCustomers(),
        customer: (_, args) => CustomerService.getCustomer(args._id),
    },
    Mutation: {
        createCustomer: (_, args) => CustomerService.createCustomer(args.customer),
        updateCustomer: (_, args) => CustomerService.updateCustomer(args._id, args.update),
        deleteCustomer: (_, args) => CustomerService.deleteCustomer(args._id),
    },
};

module.exports = resolvers;