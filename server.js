const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// HTML göstər
app.use(express.static(__dirname));

// uploads setup
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// upload route
app.post("/upload", upload.single("image"), (req, res) => {
    res.send("Image uploaded successfully!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});