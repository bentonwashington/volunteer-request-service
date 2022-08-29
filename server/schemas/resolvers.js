const { Request, Category, User } = require('../models');

const resolvers = {
    Query: {
        requests: async () => {
            return await Request.find({});
        },
        catrequests: async (parent, args) => {
            return await Request.findOne({category:args.category});
        },
        categories: async () => {
            return await Category.find({});
        },
        user: async (parent, args) => {
            return await User.findById(args.id);
        },
    },

    Mutation: {
        addUser: async (parent, { email, username, password}) => {
            return await User.create({ email, username, password })
        },
        updateUser: async (parent, { email }) => {
            return await User.findOneAndUpdate(
                { email },
                {new: true}
            );
        },
        deleteUser: async (parent, {}) => {
            return await User.findByIdAndDelete({_id: userId})
        },
        addRequest: async (parent, { title, description, details }) => {
            return await Request.create({ title, description, details });
        },
        updateRequest: async (parent, { description, details }) => {
            return await Request.findOneAndUpdate(
                { description },
                { details },
                { new: true }
            );
        },
        deleteRequest: async (parent, {}) => {
            return await Request.findByIdAndDelete({ _id: requestId})
        },
    },
}

module.exports = resolvers;