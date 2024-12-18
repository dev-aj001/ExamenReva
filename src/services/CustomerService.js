const Customer = require('../models/CustomerModel');

const getCustomers = async () => {
    return await Customer.find();
}

const getCustomer = async (id) => {
    const customer = await Customer.findById(id);
    if (!customer) {
        throw new Error('Customer not found');
    }
    return customer;
}

const createCustomer = async (input) => {
    const customer = new Customer(input);
    return await customer.save();
}

const updateCustomer = async (id, update) => {
    const customer = await Customer.findById(id);
    if (!customer) {
        throw new Error('Customer not found');
    }
    return await Customer.findByIdAndUpdate(id, update, { new: true });
}

const deleteCustomer = async (id) => {
    const customer = await Customer.findById(id);
    if (!customer) {
        throw new Error('Customer not found');
    }
    return await Customer.findByIdAndDelete(id);
}

module.exports = {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
}