const { User, Product, Category, Image } = require("../models");
const nodemailer = require("nodemailer");

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
  static async forgotPassword() {
    try {
      // async..await is not allowed in global scope, must use a wrapper

      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "nabiel.alif01@gmail.com",
          pass: "PTbvWpIMAkjtU74Q",
        },
      });

      //smtp dapeeewt
      // send mail with defined transport object
      // let info = await transporter.sendMail({
      //   from: "nabiel.alif01@gmail.com", // sender address
      //   to: "hawnyi77@gmail.com", // list of receivers
      //   subject: "Hello ✔", // Subject line
      //   text: "Hello world?", // plain text body
      //   html: "<b>Hello world? ngentit</b>", // html body
      // });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PubController;
