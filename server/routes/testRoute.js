const express = require("express");
const router = express.Router();

router.get('/',(req, res)=>{
    res.json({
        success:true,
        message: '✅ Test route is working!',
    });
});

module.exports = router
