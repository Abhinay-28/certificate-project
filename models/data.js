// const mongoose = require("mongoose");

// const chatSchema = new mongoose.Schema({
//     Name: {
//       type: String,
//       required:true
//     },
//     roll_no: {
//       type: Number,
//       required:true
//     },
//     Specialization: {
//       type: String,
//       maxLength:50
//     },
    
//   });

//   const Data =  mongoose.model("Data",chatSchema);

//   module.exports=Data;




const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    Name: {
      type: String,
      required: true
    },
    roll_no: {
      type: Number,
      required: true
    },
    Specialization: {
      type: String,
      maxLength: 50
    },
});

const Data = mongoose.model("Data", chatSchema);

module.exports = Data;
