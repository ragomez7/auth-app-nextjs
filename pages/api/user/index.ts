import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const { 
    name, 
    bio,
    phone,
    email,
    password,
    image_url 
  } = req.body;
  const result = await prisma.user.create({
    data: {
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
