const contactUsModel = require("../models/contact-us");

exports.getDataContact = async (req, res) => {
  const contactUs = await contactUsModel.getDataContact();
  return res.json({
    success: true,
    message: "List contact",
    results: contactUs
  });
};

exports.post = async (req, res) => {
  const contactUs = await contactUsModel.create(req.body);
  return res.json({
    success: true,
    message: "Create contact success",
    results: contactUs
  });
};