const { Category } = require("../models");
const Xendit = require("xendit-node");

const x = new Xendit({
  secretKey: "xnd_development_JNqJ5q83Fln5gQUfhcf5x732Gd6qs38114PsWPpePw42RYytVguGuTqNQ",
});

const { Invoice } = x;
const invoiceSpecificOptions = {};
const i = new Invoice(invoiceSpecificOptions);

module.exports = class PaymentController {
  static async pay(req, res, next) {
    const { name, price, categoryId } = req.body.detail;

    try {
      const category = await Category.findByPk(categoryId);
      const resp = await i.createInvoice({
        externalID: "payment-link-example",
        amount: 100000,
        description: "Invoice Demo #123",
        successRedirectURL: "http://localhost:7070/",
        invoice_duration: 86400,
        customer: {
          given_names: "John",
          surname: "Doe",
          email: "johndoe@example.com",
          mobile_number: "+6287774441111",
          addresses: [
            {
              city: "Jakarta Selatan",
              country: "Indonesia",
              postal_code: "12345",
              state: "Daerah Khusus Ibukota Jakarta",
              street_line1: "Jalan Makan",
              street_line2: "Kecamatan Kebayoran Baru",
            },
          ],
        },
        customer_notification_preference: {
          invoice_created: ["whatsapp", "sms", "email", "viber"],
          invoice_reminder: ["whatsapp", "sms", "email", "viber"],
          invoice_paid: ["whatsapp", "sms", "email", "viber"],
          invoice_expired: ["whatsapp", "sms", "email", "viber"],
        },
        success_redirect_url: "https://www.google.com",
        failure_redirect_url: "https://www.google.com",
        currency: "IDR",
        items: [
          {
            name: name,
            quantity: 1,
            price: price,
            category: category.name,
            url: "https://yourcompany.com/example_item",
          },
        ],
        fees: [
          {
            type: "ADMIN",
            value: 5000,
          },
        ],
      });
      res.status(201).json(resp);
    } catch (err) {
      console.log(err);
    }
  }
};
