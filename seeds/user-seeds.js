const { User } = require('../models');

const userData = [
    {
        username: 'someguy',
        email: 'someguy@gmail.com',
        password: 'password123'
    },
    {
        username: 'test',
        email: 'test@gmail.com',
        password: 'password123'
    },
    {
        username: 'jess',
        email: 'jess@gmail.com',
        password: 'password123'
    },
    {
        username: 'me123',
        email: 'me123@gmail.com',
        password: 'password123'
    },
    {
        username: 'dude23',
        email: 'dude23@gmail.com',
        password: 'password123'
    }
];

const userSeed = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = userSeed;