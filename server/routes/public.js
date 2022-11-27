const express = require("express");
const PaymentController = require("../controllers/paymentController");
const router = express.Router();
const PubController = require("../controllers/pubController");

router.get("/products", PubController.getAllProduct);
router.get("/categories", PubController.getAllCategory);
router.get("/categories/:id", PubController.getCategoryById);
router.get("/products/:id", PubController.getProductById);
router.get("/forgot", PubController.forgotPassword);

// payment
router.post("/pay", PaymentController.pay);
router.post("/invoice-callback", async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(200).json("succcez");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
