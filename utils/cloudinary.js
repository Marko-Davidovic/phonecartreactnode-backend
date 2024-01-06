const dotenv = require("dotenv");
const cloudinaryModule = require("cloudinary");

dotenv.config();
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

module.exports = {
  cloudinary: cloudinaryModule,
  uploadPreset: uploadPreset,
};

module.exports = cloudinary;