const contactUs = require("express").Router();

const contactUsController = require("../controllers/contact-us");

contactUs.get("/", contactUsController.getDataContact);
contactUs.post("/", contactUsController.post);
contactUs.patch("/:id", contactUsController.patch);
contactUs.delete("/:id", contactUsController.delete);
contactUs.get("/:id", contactUsController.getContactById);

module.exports = contactUs;