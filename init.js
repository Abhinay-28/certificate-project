// const mongoose= require("mongoose");
// const Data = require("./models/data.js");

// main().then(()=>{
//     console.log("connection successfull");
// })
// .catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/CertificateForm');
//   }

//   let allData= [
//     {
//      Name:abhinay ,
//     roll_no:233455  ,   
//     },

//     {
//         Name:rohit,
//         roll_no:556789,
//     }
//   ];

//   Data.insertMany(allData);




const mongoose = require("mongoose");
const Data = require("./models/data.js");

main().then(() => {
    console.log("Connection successful");
    insertData();
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/CertificateForm');
}

async function insertData() {
    try {
        let allData = [
            { Name: "abhinay", roll_no: 233455 },
            { Name: "rohit", roll_no: 556789 }
        ];
        await Data.insertMany(allData);
        console.log("Data inserted successfully");
        console.log(allData);
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}
