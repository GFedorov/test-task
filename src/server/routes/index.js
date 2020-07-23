const multer = require('multer')
const path = require('path')
const giraffeController = require('../controllers/giraffe')
const storage = multer.diskStorage({
    destination: './uploads/' /* relative to root dir of project */,
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports = (app) => {
    // Upload image
    app.post('/uploadImage', upload.single('file'), async (req, res) => {
        if (req.file) {
            res.send({ success: true })
        } else {
            res.sendStatus(500)
        }
    })

    // Giraffe API
    app.get('/api/giraffe', giraffeController.list)

    app.post('/api/giraffe', (req, res) => {
        
        
    })
}