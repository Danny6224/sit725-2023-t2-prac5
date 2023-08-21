let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    // let cat = req.body;
    // console.log(cat);
    // insertCat(cat, (err,result) => {
    //     if(!err){
    //         res.json({statusCode:201,data:result,message:'success'});
    //     }
    // });

    controller.postCat(req,res);
});

router.get('/', (req,res)=>{
    // getAllCats((err,result)=>{
    //     console.log(result);
    //     if(!err){
    //         res.json({statusCode:200,data:result,message:'success'});
    //     }
    // });

    controller.getAllCats(req,res);

});

module.exports = router;