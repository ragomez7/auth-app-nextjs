import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
const { upload } = require("./services/multer");

// POST /api/post
// Required fields in body: title
// Optional fields in body: content

const path = require("path");
const DatauriParser = require("datauri/parser");
const parser = new DatauriParser();

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dg8htxonw",
  api_key: "473797789945362",
  api_secret: "oO8RWe7vj1wdMWYaZWww9dwlocU",
});

const cloudinaryUpload = (file: any) => cloudinary.uploader.upload(file);

const formatBufferTo64 = (file: any) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);

const singleUpload = upload.single("image");

// const handler = async (req: any, res: any, next: any) => {
//   console.log(Object.keys(req))
//   console.log("1")
//   singleUpload(req, res, (error) => {
//     console.log("trySingleUpload")
//     if(error) {
//       console.log('there was an error')
//       console.log(error.message)
//       return res.sendApiError({ title: "Upload Error", detail: error.message });
//     }
//   })
//   setTimeout(
//     async () => {
//       try {
//         if (!req.file) {
//           throw new Error("Image is not presented!");
//         }
//         console.log("2")
//         const file64 = formatBufferTo64(req.file);
//         const uploadResult = await cloudinaryUpload(file64.content);
//         console.log("uploadResult");
//         console.log(uploadResult);

//         return res.json({
//           cloudinaryId: uploadResult.public_id,
//           url: uploadResult.secure_url,
//         });
//       } catch (e) {
//         return res.status(422).send({ message: e.message });
//       }
//     }, 5000
//   )

// }
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler = async (req: any, res: any, next: any) => {
  console.log(Object.keys(req));
  console.log("1");
  // singleUpload(req, res, (error) => {
  //   console.log("trySingleUpload");
  //   if (error) {
  //     console.log("there was an error");
  //     console.log(error.message);
  //     return res.sendApiError({ title: "Upload Error", detail: error.message });
  //   }
  // });
  try {
    await runMiddleware(req, res, singleUpload)
  } catch (e) {
    console.log("there was an error");
    return res.status(500).json({ title: "Upload Error", detail: e.message });
  }
  
  
  try {
    if (!req.file) {
      throw new Error("Image is not presented!");
    }
    const file64 = formatBufferTo64(req.file);
    const uploadResult = await cloudinaryUpload(file64.content);
    console.log(uploadResult);

    return res.json({
      cloudinaryId: uploadResult.public_id,
      url: uploadResult.secure_url,
    });
  } catch (e) {
    return res.status(422).send({ message: e.message });
  }
};

export default handler;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
