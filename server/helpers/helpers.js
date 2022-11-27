const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const passHash = pass => bcrypt.hashSync(pass, 10);
const passCompare = (pass, hash) => bcrypt.compareSync(pass, hash);

const tokenSign = payload => jwt.sign(payload, process.env.SECRET_KEY);
const tokenVerify = token => jwt.verify(token, process.env.SECRET_KEY);

const formatSlug = name => name.split(" ").slice(0, 2).join("-");

const generatePasswordToken = () => {
  return crypto.randomBytes(20).toString("hex");
};

//TODO: generatePasswordReset method
// const generatePasswordReset
// UserSchema.methods.generatePasswordReset = function() {
//     this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
//     this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
// };

module.exports = { formatSlug, passHash, passCompare, tokenSign, tokenVerify, generatePasswordToken };
