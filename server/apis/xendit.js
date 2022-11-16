const Xendit = require("xendit-node");
const x = new Xendit({
  secretKey: "xnd_development_JNqJ5q83Fln5gQUfhcf5x732Gd6qs38114PsWPpePw42RYytVguGuTqNQ",
});

//ewallet payment
const { EWallet } = x;
const ewalletSpecificOptions = {};
const ew = new EWallet(ewalletSpecificOptions);

const resp = await ew.createEWalletCharge({
  referenceID: "test-reference-id",
  currency: "IDR",
  amount: 1000,
  checkoutMethod: "ONE_TIME_PAYMENT",
  channelCode: "ID_SHOPEEPAY",
  channelProperties: {
    successRedirectURL: "https://dashboard.xendit.co/register/1",
  },
  metadata: {
    branch_code: "tree_branch",
  },
});
