const { passCompare, tokenSign } = require('../helpers/helpers');
const { User, Product, Image, Category, sequelize } = require('../models');

class AdminController {
  //user
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;

      const response = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
        role: 'admin',
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
      // console.log(findUser);
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
        email: findUser.email,
        authorId: findUser.id,
      });
    } catch (err) {
      next(err);
    }
  }

  //product
  static async createProduct(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { id } = req.user;
      const {
        name,
        description,
        price,
        mainImg,
        category: categoryId,
      } = req.body;

      const response = await Product.create(
        {
          name,
          description,
          price,
          mainImg,
          authorId: id,
          categoryId,
        },
        { transaction: t }
      );

      await t.commit();

      res.status(201).json(response);
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

  static async getAllProduct(req, res, next) {
    try {
      const response = await Product.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
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

  static async updateProduct(req, res, next) {
    try {
      const { name, description, price, mainImg } = req.body;
      const { id } = req.params;

      const findProduct = Product.findByPk(id);
      if (!findProduct) throw { name: 'Not Found' };

      await Product.update(
        { name, description, price, mainImg },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({
        message: 'Product updated successfully',
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;

      const findProduct = Product.findByPk(id);
      if (!findProduct) throw { name: 'Not Found' };

      await Product.delete({ where: { id } });
    } catch (err) {
      next(err);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Product.findOne({
        where: { id },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });

      if (!response) throw { name: 'Not Found' };

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  //category
  static async getCategory(req, res, next) {
    try {
      const response = await Category.findAll();

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async createCategory(req, res, next) {
    try {
      const { name } = req.body;
      console.log(name);
      const response = await Category.create({ name });

      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async updateCategory(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const findCat = await Category.findByPk(id);
      if (!findCat) throw { name: 'Not Found Category' };

      await Category.update({ name }, { where: { id } });

      res.status(200).json({
        message: 'Category updated successfully',
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params;

      const findCat = Category.findByPk(id);
      if (!findCat) throw { name: 'Not Found Category' };

      await Category.delete({ where: { id } });
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
          exclude: ['createdAt', 'updatedAt'],
        },
      });

      if (!response) throw { name: 'Not Found' };

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = AdminController;
