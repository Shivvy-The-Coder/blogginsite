import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
let blogEntries = [];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>
{
    res.render("index.ejs")
});

app.post("/create",(req,res)=>
{
    res.render("create.ejs");
});

app.post("/check",(req,res)=>
    {
        res.render("check.ejs");
    });
    


// app.post("/submit" ,(req,res)=>
// {
//     des=req.body["description"];
//     res.render("Read.ejs",
//     {
//         describe:des 
//     })
// });

app.post("/submit", (req, res) => {
    const description = req.body.description;
    blogEntries.push(description); // Add the new blog entry to the array
    res.render("index.ejs");
});


app.post("/read", (req, res) => {
    res.render("Read.ejs", { blogEntries: blogEntries });
});

app.listen(port,()=>
{
    console.log(`Server is being hosten on ${port}` )
});