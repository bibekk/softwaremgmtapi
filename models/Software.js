var db = require('../dbconnection');
var Software ={
  getAllSoftwares: function(callback){
      return db.query("SELECT software_id,software_name,tbl_software_type.software_type FROM software.tbl_software JOIN software.tbl_software_type on software.tbl_software.software_type = software.tbl_software_type.tbl_software_typeid order by tbl_software_type.software_type",callback);
  },
  getSoftwareById: function(id,callback){
      return db.query("SELECT * FROM software.tbl_software WHERE tbl_software_id=?",[id],callback);
  },
  getSoftwareByCategory: function(type,callback){
     return db.query("SELECT software_id,software_name,tbl_software_type.software_type FROM software.tbl_software JOIN software.tbl_software_type on software.tbl_software.software_type = software.tbl_software_type.tbl_software_typeid WHERE tbl_software_type.software_type =? order by tbl_software_type.software_type",[type],callback);  
  },
  addSoftware: function(Software,callback){ //console.log(Software.id);
      return db.query("Insert into tbl_software(software_id,software_name,software_type) values(?,?,?)",[Software.software_id, Software.software_name, Software.software_type],callback);
  },
  deleteSoftware: function(id,callback){
      return db.query("DELETE FROM tbl_software WHERE software_id=?",[id],callback);
  },
  updateSoftwareByID: function(id,Software,callback){ //console.log(id,Software.software_name);
      return db.query("UPDATE tbl_software SET software_name=? WHERE software_id =?",[Software.software_name, id],callback);
  },
  getMaxId:function(callback){
      return db.query("SELECT max(software_id) AS maxid FROM software.tbl_software",callback);
  },
  getSoftwareCategory:function(callback){
      return db.query("SELECT tbl_software_typeid,tbl_software_type.software_type,count(tbl_software.software_type) AS total FROM software.tbl_software RIGHT OUTER JOIN software.tbl_software_type on tbl_software.software_type =tbl_software_type.tbl_software_typeid  group by software_type",callback);
  },
  updateSoftwareCategory: function(id,Software,callback){ //console.log(id,Software.Title,Software.Status);
      return db.query("UPDATE software.tbl_software_type SET software_type=? WHERE tbl_software_typeid =?",[Software.software_type,id],callback);
  },
  addCategory: function(Category,callback){
      return db.query("Insert into tbl_software_type(software_type) values (?)",[Category.software_type],callback);
  },
  deleteCategory:function(id,callback){
      return db.query("DELETE FROM tbl_software_type WHERE tbl_software_typeid=?",[id],callback);
  }
    
};

module.exports = Software;

