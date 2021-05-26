var express = require('express');
var bcrypt = require('bcrypt')
const app = express();
const port = 3000

const users = []
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))


app.get("/", (req, res) =>{
    res.render('index.ejs', { name: 'jsdhgjsgj'})
})
app.get("/login", (req, res) =>{
    res.render('login.ejs')
})
app.get("/registre", (req, res) =>{
    res.render('registre.ejs')
})


app.post("/registre", (req, res) => {
    
})
app.post("/register", async (req, res) => {
    try {
        const hashedPassword =  await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch{
        res.redirect('/register')
    }
    console.log(users)    
})

app.listen(port)