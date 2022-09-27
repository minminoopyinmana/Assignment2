const express = require(`express`);

const app = express()


app.use(express.static('public'))
app.use(`/public/home.html`,express(__dirname + `public/home.html`))
app.use(`/public/about.html`,express(__dirname + `/public/about.html`))
app.use(`/public/contact.html`,express(__dirname + `/public/contact.html`))
app.use(`/public/address.html`,express(__dirname + `/public/address.html`))



app.get("",(req,res)=>{
    res.sendfile(__dirname + '/public/home.html');
})


app.get("/about",(req, res)=>{
    res.sendfile(__dirname + `/public/about.html`);
})

app.get("/contact",(req, res)=>{
    res.sendfile(__dirname + `/public/contact.html`);
})


app.get("/address",(req, res)=>{
    res.sendfile(__dirname + '/public/address.html');
})





app.listen(3000,()=>{

    console.log(`Server starting up at port :3000`);
})