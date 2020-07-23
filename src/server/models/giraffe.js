const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiraffeSchema = new Schema({
        "name": "string",
        "weight": "number",
        "height": "number",
        "sex": "string",
        "color": "string",
        "diet": "string",
        "character": "string",

});

	const list = async function(){return await this.find()
	.exec()
	.then(items=>items)
    }

GiraffeSchema.statics={
    list
}

const Giraffe = mongoose.model('giraffe', GiraffeSchema);

module.exports = 
    Giraffe