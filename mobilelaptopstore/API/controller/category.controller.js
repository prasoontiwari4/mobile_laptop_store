import '../models/connection.js';
import CategorySchemaModel from '../models/category.model.js';
import rs from 'randomstring';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export var save=async (req,res,next)=>{
  console.log(req.files);
 console.log(req.body);
 var cList=await CategorySchemaModel.find();
 var l=cList.length;
 var _id = l==0?1:cList[l-1]._id+1;
 var caticon=req.files.caticon;
 var caticonnm=rs.generate()+"-"+Date.now()+"-"+caticon.name;
 var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/caticons",caticonnm);

 var cDetails=req.body;
 cDetails={...cDetails,"_id":_id,"caticonnm":caticonnm};
 
 
 try{ 
  await CategorySchemaModel.create(cDetails);
  caticon.mv(uploadpath);
  res.status(201).json({"status":true});
 }
 catch(err){
  res.status(500).json({"status":false});    
 }

};
 export var fetch=async (req,res,next)=>{
    var condition_object=url.parse(req.url,true).query;
    var cList = await CategorySchemaModel.find(condition_object);
    var l=cList.length;
    if(l!=0)
      return res.status(201).json(cList);
    else
      return res.status(500).json({"result": "Server Error"});
  }
  
  export var updateCategory=async(req,res,next)=>{
    let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(cDetails){
       let c=await CategorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
       if(c)
        return res.status(201).json({"msg":"success"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
    
  }
  
  export var deleteCategory=async(req,res,next)=>{  
    var c = await CategorySchemaModel.find(JSON.parse(req.body.condition_obj));
    console.log(c);
    if(c.length!=0){
      let result = await CategorySchemaModel.deleteMany(JSON.parse(req.body.condition_obj)); 
      if(result)
       return res.status(201).json({"msg":"success"});
      else
       return res.status(500).json({error: "Server Error"});
    }
    else
      return res.status(404).json({error: "Resource not found"}); 
    
  }