const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'secretKey10';

const passHash = pass => bcrypt.hashSync(pass, 10);
const passCompare = (pass, hash) => bcrypt.compareSync(pass, hash);

const tokenSign = payload => jwt.sign(payload, secretKey);
const tokenVerify = token => jwt.verify(token, secretKey);

const formatSlug = name => name.split(' ').slice(0, 2).join('-');

module.exports = { formatSlug, passHash, passCompare, tokenSign, tokenVerify };
