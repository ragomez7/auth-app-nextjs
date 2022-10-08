import { upload } from "./services/multer"
import path from 'path'
import DatauriParser from "datauri/parser"
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

const handler = async (req: any, res: any) => {
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
