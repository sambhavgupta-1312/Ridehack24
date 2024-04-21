const express = require("express")
const path = require("path")
const app = express();
const port = 3000;
const pg = require("pg");
const bodyParser = require("body-parser");

// const db = new pg.Client({
//     user:'postgres',
//     host:"localhost",
//     database:"Ride-hack-24",
//     password:"Sambhav#7890",
//     port:5432,
// });
// db.connect();


const staticPath =path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../templates/views")
app.use(express.static(staticPath)) 
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","hbs")
app.set("views",templatePath)

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/scheme",(req,res)=>{
    res.render("scheme")
})
app.get("/sign_in",(req,res)=>{
    res.render("sign_in");
})
app.get("/dashboard",(req,res)=>{
    res.render("dashboard");
})

app.get("/mycon",(req,res)=>{
    res.render("mycon");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.get("/sign_investor",(req,res)=>{
    res.render("sign_investor");
})

app.get("/sign_startup",(req,res)=>{
    res.render("sign_startup");
})

app.get("/sign_job",(req,res)=>{
    res.render("sign_job");
})

app.post('/sign_in', (req, res) => {
    // Extract data from the request body
    const {
        'company-name': companyName,
        'business-registration-number': regNumber,
        'legal-structure': legalStructure,
        'industry-type': industryType,
        'company-website': companyWebsite,
        'business-email': businessEmail,
        'phone-number': phoneNumber,
        'company-address': companyAddress,
        city,
        'state-province': stateProvince,
        'zip-postal-code': zipPostalCode,
        country,
        password,
        'specific-requirements': specificRequirements
    } = req.body;

    // Log the extracted data (for debugging)
    console.log('Received data:');
    console.log('Company Name:', companyName);
    console.log('Business Registration Number:', regNumber);
    console.log('Legal Structure:', legalStructure);
    console.log('Industry Type:', industryType);
    console.log('Company Website:', companyWebsite);
    console.log('Business Email:', businessEmail);
    console.log('Phone Number:', phoneNumber);
    console.log('Company Address:', companyAddress);
    console.log('City:', city);
    console.log('State/Province:', stateProvince);
    console.log('Zip/Postal Code:', zipPostalCode);
    console.log('Country:', country);
    console.log('Password:', password);
    console.log('Specific Requirements:', specificRequirements);

    // Respond to the client
    res.send('Form submitted successfully!');
});

app.listen(port,()=>{
    console.log(`listening to port : ${port}`)
})