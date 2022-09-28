const prisma = require("../helpers/prisma");

exports.getDataContact = async (data) => {
  const page = parseInt(data.query.page) || 1;
  const limit = parseInt(data.query.limit) || 5;
  const search = data.query.search || '';
  const sort = data.query.sort || 'asc';// asc || desc
  const filter = data.query.filter || 'email';

  console.log(filter);
  const count = await prisma.contact_us.findMany(search && {
    where: {
      email: { contains: search }
    }
  });

  const contact = await prisma.contact_us.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: {
      email: { contains: search }
    },
    orderBy: {
      [filter]: sort,
    },
  });

  const pageInfo = {}

  pageInfo.totalData = count.length
  pageInfo.totalPage = Math.ceil(count.length / limit)
  pageInfo.currentPage = page
  pageInfo.nextPage = (page + 1) > pageInfo.totalPage? null:(page + 1)
  pageInfo.prevPage = (page - 1) === 0? null:(page - 1)

  return { contact, pageInfo };
};

exports.create = async (data) => {
  const contact = await prisma.contact_us.create({
    data
  });
  return contact;
};