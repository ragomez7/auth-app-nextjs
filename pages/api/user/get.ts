import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { email } = req.query || {};
  if (!email) res.json({});

  const result = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      bio: true,
      phone: true,
      password: true,
    },
  });
  console.log({result});
  res.json(result ? result : {});
}
