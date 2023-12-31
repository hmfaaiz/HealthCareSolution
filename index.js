const express = require("express");
const app = express();
const mongoose = require("mongoose");
const adminR=require("./route/adminR")
const driverR=require("./route/driverR")
const driverManagementR=require("./route/driverManagementR")
const ambulanceR=require("./route/ambulanceR")
const shiftR=require("./route/shiftR")
const userR=require("./route/userR")
const patientR=require("./route/patientR")
const ambulanceAllocateToDriverR=require("./route/ambulanceAllocateToDriverR")

const cors = require("cors");
const dotenv=require("dotenv")


dotenv.config()
mongoose
  .connect(process.env.DB_Url)

  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));

app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to FHCS Ambulance Service");

});

app.use("/api/fhcsambulance",adminR)
app.use("/api/fhcsambulance/driver",driverR)
app.use("/api/fhcsambulance/driverManagement",driverManagementR)
app.use("/api/fhcsambulance/vehicle",ambulanceR)
app.use("/api/fhcsambulance/shift",shiftR)
app.use("/api/fhcsambulance/user",userR)
app.use("/api/fhcsambulance/patient",patientR)
app.use("/api/fhcsambulance/allocation",ambulanceAllocateToDriverR)

app.listen(process.env.PORT, () => {
  console.log("server is running");
});

