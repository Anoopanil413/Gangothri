import mongoose from 'mongoose'


const timeTable = new mongoose.Schema({
    class:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    day_of_week: { type: String, required: true },
    time_table: [{
        subject_name: { type: String, required: true },
        teacher_name: { type: String, required: true },
        start_time: { type: String, required: true },
        end_time: { type: String, required: true },
      }],

})


const TimeTable = mongoose.model('TimeTable', timeTableSchema);
export default TimeTable


