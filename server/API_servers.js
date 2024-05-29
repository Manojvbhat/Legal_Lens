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

// End point to get the winner and verdict
app.get("/get_verdict",(req,res)=>{
	try {
        // Read the file content synchronously
        const data = fs.readFileSync(path.join("../Input_folder","sjudge.txt"), 'utf8');
		 // Split the content by new lines
		 const lines = data.split('\n');
        
		 // Get the first line
		 const firstLine = lines[0].trim();
		if (firstLine == "Pavithra")
			{
				var file_name = "pavithra.txt"
			}
		else{
				var file_name = "pramod.txt"
		}
		console.log(file_name);
        const verdict = fs.readFileSync(path.join("../Input_folder",file_name), 'utf8');
		res.json({ winner: firstLine, judgement:verdict });
        console.log(firstLine);
      } catch (err) {
        console.error(err);
      }
})

//Route to post judgement pdf to the server
app.post("/upload",upload.single("file"),(req,res)=>{
	console.log(req.body);
res.send("file uploaded")
})

app.listen(PORT,()=>{
	console.log("Server listening to port ",PORT);
})