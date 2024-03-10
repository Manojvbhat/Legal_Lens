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

//End point to get summary
app.get("/summary",(req,res)=>{
	console.log("API call successfull");
	const { spawn } = require('child_process');
    const pyProg = spawn('python', ['legal_lens.py']);

    pyProg.stdout.on('data', function(data) {

        console.log(data.toString());
        //res.write(data);
        //res.end('end');
		
    });

	pyProg.on("close",(code)=>
	{
		console.log(code);
	})

	fs.readFile('../Output_summary/summary.txt', 'utf8', function(err, data){
		// Display the file content
		console.log(data);
		res.send(data)
	});
	 
	console.log('readFile called');
})

app.listen(PORT,()=>{
	console.log("Server listening to port ",PORT);
})