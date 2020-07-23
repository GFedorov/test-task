const Giraffe = require('../models/giraffe.js')

const list = async(req, res) =>{
    const giraffes = await Giraffe.list()
    res.json({items:giraffes})

}
module.exports = { list
    
}