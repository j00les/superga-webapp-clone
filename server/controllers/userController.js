const { passCompare, tokenSign } = require('../helpers/helpers');
const { User } = require('../models');

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, addres } = req.body;

      const response = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });

      res.status(201).json({
        id: response.id,
        email: response.email,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const findUser = await User.findOne({ where: { email } });
      if (!findUser) throw { name: 'Unauthorized' };

      const isValid = passCompare(password, findUser.password);
      if (!isValid) throw { name: 'Unauthorized' };

      const payload = {
        id: findUser.id,
        email: findUser.email,
      };

      const access_token = tokenSign(payload);

      res.status(200).json({
        access_token,
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = UserController;
