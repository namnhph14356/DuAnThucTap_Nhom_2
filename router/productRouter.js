const express = require("express")
const router = express.Router();
const Product = require('../models/productModels')


router.get("/getallproducts", (res, req) =>  {
    Product.find({}, (err, docs) =>  {
        if(!err){
            return res.json({data : docs});
        }
        else{
            return res.status(400).json({message: "Something went wrong"})
        }
    })
})
module.exports = router