var express = require('express');
var router = express.Router();
var Software = require('../models/Software');
/*
router.use(function(req,res,next){
   next(); 
});
*/
router.get('/maxid',function(req,res,next){ //res.send("maxid");
   Software.getMaxId(function(err,count){
      if(err){
          res.json(err);
      } else{
          res.json(count);
      }
   });
});

router.get('/category',function(req,res,next){
   Software.getSoftwareCategory(function(err,rows){
      if(err){
          res.json(err);
      } else{
          res.json(rows);
      }
   });
});

router.get('/category/:type',function(req,res,next){
       Software.getSoftwareByCategory(req.params.type,function(err,rows){
          if(err){
              res.json(err);
          } else{
              res.json(rows);
          }
       });
});

router.post('/category',function(req,res,next){
   Software.addCategory(req.body,function(err,count){
      if(err){
          res.json(err);
      } else{
          res.json(count);
      }
   });
});

router.delete('/category/:id',function(req,res,next){
   Software.deleteCategory(req.params.id, function(err,rows){
      if(err){
          res.json(err);
      } else{
          res.json(rows);
      }
   });
});



router.get('/:id',function(req,res,next){
   if(req.params.id){
       Software.getSoftwareById(req.params.id, function(err,rows){
          if(err){
              res.json(err);
          } else{
              res.json(rows);
          }
       });
   }
});



router.get('/',function(req,res,next){
    Software.getAllSoftwares(function(err,rows){
          if(err){
              res.json(err);
          } else{
              res.json(rows);
          }
       }); 
});

router.post('/',function(req,res,next){ console.log(req.body);
   Software.addSoftware(req.body,function(err,count){
      if(err){
          res.json(err);
      } else{
          res.json(count);
      }
   });
});


router.put('/category/:id',function(req,res,next){ //console.log(req.body);
   Software.updateSoftwareCategory(req.params.id,req.body,function(err,rows){
      if(err){
          res.json(err);
      }else{
          res.json(rows);
      }
   });
});


router.put('/:id',function(req,res,next){ //console.log(req.body);
   Software.updateSoftwareByID(req.params.id,req.body,function(err,rows){
      if(err){
          res.json(err);
      }else{
          res.json(rows);
      }
   });
});

router.delete('/:id',function(req,res,next){
   Software.deleteSoftware(req.params.id, function(err,rows){
      if(err){
          res.json(err);
      } else{
          res.json(rows);
      }
   });
});


module.exports = router;