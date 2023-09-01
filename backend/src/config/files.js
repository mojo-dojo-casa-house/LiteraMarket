const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination: function (request, file, cb) {
    	let destinatioPath;
		destinatioPath = path.join(__dirname, "..", "..", "uploads", "images");
		cb(null, destinatioPath);
	},
  	filename: function (request, file, cb) {
  		cb(null, Date.now() + "-" + file.originalname);
  	}
});

const imageUpload = multer({

    storage: storage,
    limits: {
        //10MB e ate 4 arquivos
        fileSize: 10 * 1024 * 1024,
        files: 4
    },
    fileFilter: function (request, file, cb) {
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
        if(!allowedTypes.includes(file.mimetype)) {
            return cb(new Error("Apenas arquivos .jpg, .jpeg e .png são suportados"));
        }
        cb(null, true);
    }

});

module.exports = imageUpload;