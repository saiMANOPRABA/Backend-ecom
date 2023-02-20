const express = require("express");
// const dotenv = require("dotenv").config;
const PORT =  4000;
const app = express();

app.listen(PORT, async()=>{
    console.log(`server is running in ${PORT}`);
})
