const bcrypt = require('bcrypt');

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};