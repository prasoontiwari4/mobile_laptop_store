import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
const app = express();

//to import routers
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';

// to allow cross origin request
app.use(cors());

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//to extract body file data from request
app.use(fileUpload());

//route level middleware 
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/subcategory",SubCategoryRouter);
app.listen(3001);
console.log("server invoked at link http://localhost:3001");