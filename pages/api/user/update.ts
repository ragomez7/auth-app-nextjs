import prisma from "../../../lib/prisma";

export default async function handle(req: any, res: any) {
  const {
    profileName,
    profileBio,
    profilePhone,
    profileEmail,
    profilePassword,
    profileImage,
  } = req.body;
  const result = await prisma.user.update({
    where: {
      email: profileEmail,
    },
    data: {
      name: profileName,
      bio: profileBio,
      phone: profilePhone,
      email: profileEmail,
      password: profilePassword,
      image: profileImage,
    },
  });
  res.json(result);
}
