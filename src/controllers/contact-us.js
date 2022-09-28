const contactUsModel = require("../models/contact-us");
const response = require('../helpers/standardResponse')

exports.getDataContact = async (req, res) => {
  const results = await contactUsModel.getDataContact(req);

  return response(res, "List contact", results.contact, results.pageInfo);
};

exports.post = async (req, res) => {
  const contactUs = await contactUsModel.create(req.body);
  return res.json({
    success: true,
    message: "Create contact success",
    results: contactUs
  });
};