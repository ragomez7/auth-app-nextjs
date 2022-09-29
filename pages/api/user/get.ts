import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// GET /api/get
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { email } = req.query || {};
  if (!email) res.json({});

  //   const session = await getSession({ req });
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
  // console.log(`result ${result}`);
  console.log({result});
  res.json(result ? result : {});
}
