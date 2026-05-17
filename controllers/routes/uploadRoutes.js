const express = require("express");
const multer = require("multer");
const { uploadImage } = require("../controllers/uploadController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;