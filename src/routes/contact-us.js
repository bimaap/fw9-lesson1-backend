const contactUs = require("express").Router();

const contactUsController = require("../controllers/contact-us");

contactUs.get("/", contactUsController.getDataContact);
contactUs.post("/", contactUsController.post);

module.exports = contactUs;