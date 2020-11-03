const mongoose= require('mongoose'); 
const Schema = mongoose.Schema; 
//LOOK UP mongoose-timestamp

const scheduleSchema = new Schema({  
    name: {
        type: String,
        required: true
        //LOOK UP format-validators
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Schedule = mongoose.model('Skill', scheduleSchema);
module.exports = Schedule;