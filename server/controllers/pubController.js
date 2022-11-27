const { User, Product, Category, Image } = require("../models");
const nodemailer = require("nodemailer");
const { generatePasswordToken } = require("../helpers/helpers");

class PubController {
  static async getAllProduct(req, res, next) {
    try {
      const response = await Product.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: Image,
        },
      });
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async getAllCategory(req, res, next) {
    try {
      const response = await Category.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Product.findOne({
        where: { id },
        include: Image,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      if (!response) throw { name: "Not Found" };

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async getCategoryById(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Category.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      if (!response) throw { name: "Not Found" };

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async recoverPassword(req, res, next) {
    try {
      const { email } = req.body;
      const findUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!findUser) throw { name: "Unauthorized" };

      const generatedToken = await User.update(
        {
          resetPasswordToken: generatePasswordToken(),
        },
        {
          where: {
            email: findUser.email,
          },
          returning: true,
        }
      );

      const { resetPasswordToken } = generatedToken[1][0];

      let resetLink = `http://${req.headers.host}/public/reset-password/${resetPasswordToken}`;

      let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      //send email for user to change their password
      const info = await transporter.sendMail({
        from: "nabiel.alif01@gmail.com",
        to: "hawnyi77@gmail.com",
        subject: "Password reset request",
        text: `Hi ${findUser.username} \n Please click on the following link ${resetLink} to reset your password. \n\n If you did not request this, please ignore this email and your password will remain unchanged.\n };`,
        html: `<p>Hi ${findUser.username} \n Please click on the following link ${resetLink} to reset your password. \n\n If you did not request this, please ignore this email and your password will remain unchanged.\n }</p>`,
      });
      console.log(info);
      res.status(200).json({ message: "Reset password email sent" });
    } catch (error) {
      next(error);
    }
  }

  static async resetPassword(req, res, next) {
    try {
      const { token } = req.params;
      const { password } = req.body;
      const findUser = await User.findOne({
        where: {
          resetPasswordToken: token,
        },
      });
      if (!findUser) throw { name: "Unauthorized" };
      await User.update(
        {
          password,
        },
        {
          where: {
            resetPasswordToken: token,
          },
        }
      );
      res.status(200).json({ message: "Password changed" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PubController;
