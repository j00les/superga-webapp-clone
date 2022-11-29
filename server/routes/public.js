const express = require("express");
const PaymentController = require("../controllers/paymentController");
const router = express.Router();
const PubController = require("../controllers/pubController");
const authentication = require("../middlewares/authn");

router.get("/products", PubController.getAllProduct);
router.get("/categories", PubController.getAllCategory);
router.get("/categories/:id", PubController.getCategoryById);
router.get("/products/:id", PubController.getProductById);

//#Forgot password
router.get("/forgot-password", PubController.recoverPassword);
router.get("/reset-password/:token", PubController.resetPassword);

// router.use(authentication);
// payment
router.post("/pay", PaymentController.pay);
router.post("/invoice-callback", PaymentController.invoiceCallback);

module.exports = router;
