const prisma = require("../helpers/prisma");

exports.getDataContact = async () => {
  const contact = await prisma.contact_us.findMany();
  return contact;
};

exports.create = async (data) => {
  const contact = await prisma.contact_us.create({
    data
  });
  return contact;
};