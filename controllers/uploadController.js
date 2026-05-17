const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "Şəkil seçilməyib",
    });
  }

  res.status(200).json({
    message: "Şəkil uğurla yükləndi",
    file: req.file,
  });
};

module.exports = { uploadImage };