const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Data = require("./models/data.js"); // Import the Data model

// Set up view engine and static file location
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

main().then(() => {
    console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/CertificateForm');
}


app.get("/data",async(req,res)=>{
    let datas= await Data.find();// sarra data database se nikalne ke liye use krte hain
    console.log(datas);
    res.render("certificate.ejs",{datas}); //data pass karna hai index ejs pe aapke view me
 });// .find() humara asynchronous fun hota hai aur promise return krta hai to await use krna pdega lekin await hum sirf async fun me use kar skte hain to fun ko async bnao
 

// Root route

app.get("/", (req, res) => {
    // res.send("Root is working");
    res.render("form.ejs");
});

// Render certificate submission form
// app.get("/data/form", (req, res) => {
//     res.render("form.ejs");
// });

// Handle form submission
app.post("/data/form", (req, res) => {
    
    let { Name, roll_no, Specialization } = req.body; // Extract Specialization from request body
    let newData = new Data({
        Name: Name,
        roll_no: roll_no,
        Specialization: Specialization // Add Specialization to the object
    });
    

    newData.save().then(() => {
        console.log("Data saved");
        console.log(newData);
        res.redirect("/data"); // Redirect to data route after saving data
    }).catch(err => {
        console.log(err);
        res.status(500).send("Error saving data");
    });
});

// Start server
const PORT = process.env.PORT || 2060;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
