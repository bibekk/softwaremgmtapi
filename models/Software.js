var db = require('../dbconnection');
var Software ={
  getAllSoftwares: function(callback){
      return db.query("SELECT software_id,software_name,tbl_software_type.software_type FROM software.tbl_software join software.tbl_software_type on software.tbl_software.software_type = software.tbl_software_type.tbl_software_typeid order by tbl_software_type.software_type",callback);
  },
  getSoftwareById: function(id,callback){
      return db.query("select * from software.tbl_software where tbl_software_id=?",[id],callback);
  },
  getSoftwareByCategory: function(type,callback){
     return db.query("SELECT software_id,software_name,tbl_software_type.software_type FROM software.tbl_software join software.tbl_software_type on software.tbl_software.software_type = software.tbl_software_type.tbl_software_typeid where tbl_software_type.software_type =? order by tbl_software_type.software_type",[type],callback);  
  },
  addSoftware: function(Software,callback){ //console.log(Software.id);
      return db.query("Insert into tbl_software(software_id,software_name,software_type) values(?,?,?)",[Software.software_id, Software.software_name, Software.software_type],callback);
  },
  deleteSoftware: function(id,callback){
      return db.query("delete from tbl_software where software_id=?",[id],callback);
  },
  updateSoftware: function(id,Software,callback){ //console.log(id,Software.Title,Software.Status);
      return db.query("update tbl_software set Title=?, Status=? where tbl_software_id =?",[Software.Title, Software.Status, id],callback);
  },
  getMaxId:function(callback){
      return db.query("select max(software_id) as maxid from software.tbl_software",callback);
  },
  getSoftwareCategory:function(callback){
      return db.query("select * from software.tbl_software_type",callback);
  },
  updateSoftwareCategory: function(id,Software,callback){ //console.log(id,Software.Title,Software.Status);
      return db.query("update software.tbl_software_type set software_type=? where tbl_software_typeid =?",[Software.software_type,id],callback);
  },
  addCategory: function(Category,callback){
      return db.query("Insert into tbl_software_type(software_type) values (?)",[Category.software_type],callback);
  },
  deleteCategory:function(id,callback){
      return db.query("delete from tbl_software_type where tbl_software_typeid=?",[id],callback);
  }
    
};

module.exports = Software;

