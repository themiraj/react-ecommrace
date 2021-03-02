const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HafAWAT5LLTROXb3Pg2Pb8871RFENTqa3KPU6Dqx4LPObTgpEzJauNhZ85HkCtrKnEZwRUzOjcroH1q82HsqEnt00Q40nHqeH");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res) => {
    res.send("Welcome into react shop website");
});
app.post("/checkout", async (req,res) => {

});
app.listen(8080,()=>{
    console.log("your app is running on port number 8080")
})
