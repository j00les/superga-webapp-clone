const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = "secretKey10";

const passHash = pass => bcrypt.hashSync(pass, 10);
const passCompare = (pass, hash) => bcrypt.compareSync(pass, hash);

const tokenSign = payload => jwt.sign(payload, process.env.SECRET_KEY);
const tokenVerify = token => jwt.verify(token, process.env.SECRET_KEY);

const formatSlug = name => name.split(" ").slice(0, 2).join("-");

//TODO: generatePasswordReset method
// UserSchema.methods.generatePasswordReset = function() {
//     this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
//     this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
// };

module.exports = { formatSlug, passHash, passCompare, tokenSign, tokenVerify };
