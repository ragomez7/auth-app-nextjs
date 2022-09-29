import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: any, res: any) {
  const { 
    name, 
    bio,
    phone,
    email,
    password,
    image_url 
  } = req.body;

  // const session = await getSession({ req });
  const result = await prisma.user.create({
    data: {
      // title: title,
      // content: content,
      // author: { connect: { email: session?.user?.email } },
      name: name,
      bio: bio,
      phone: phone,
      email: email,
      password: password,
      image: image_url
    },
  });
  res.json(result);
}
