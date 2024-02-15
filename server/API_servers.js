import express from "express"
import bodyParser from "body-parser"
import path from "path"
import fs from "fs"
import multer from "multer"
import { fileURLToPath } from "url"
import cors from "cors"

// res.header( "Access-Control-Allow-Origin" );

const PORT= process.env.PORT || 8000

const dirname=path.dirname(fileURLToPath(import.meta.url))
const app=express()
app.use(express.static(dirname+"../Input_folder"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
const upload_url= path.join( "../Input_folder")
var storage=multer.diskStorage
(
	{
		destination:(req,file,cb)=>
		{
			cb(null,upload_url)
		},
		filename:(req,file,cb)=>{
			cb(null,"sjudge.txt")
		}
	}
);
var upload = multer({ storage: storage });

//Route to post judgement pdf to the server
app.post("/upload",upload.single("file"),(req,res)=>{
res.send("file uploaded")
})

app.listen(PORT,()=>{
	console.log("Server listening to port ",PORT);
})