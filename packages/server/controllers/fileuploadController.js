const fileUpload = require('express-fileupload');
const filePayloadExists = require('../middleware/filesPayloadExists');
const fileExtLimiter = require('../middleware/fileExtLimiter');
const fileSizeLimiter = require('../middleware/fileSizeLimiter');

const postFile = async (req, res) => {
    fileUpload({createParentPath: true}),
    filePayloadExists,
    fileExtLimiter(['.mp4', '.m4p', '.m4v', '.webm', '.avi', '.mov', '.qt', '.wmv', ]),
    fileSizeLimiter,
    (req, res) => {
        const files = req.files;
        console.log(files);

        Object.keys(files).forEach(key => {
            const filepath = path.join(__dirname, 'files', files[key].name);
            files[key].mv(filepath, (err) => {
                if (err) return res.status(500).json({status: "error", message: err});
            });
        })

        return res.json({status: 'success', message: Object.keys(files).toString()});
    }
}

module.exports = {
    postFile
}