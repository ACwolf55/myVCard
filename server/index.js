const express = require('express')
const app = express()
const path =require('path')
const cors = require('cors')
const vCardsJS = require('vcards-js');

require("dotenv").config(); 

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(express.static(path.resolve(`${__dirname}/../build`))) 

const {PORT} = process.env


app.post('/addContact',(req,res)=>{
 
//create a new vCard
var vCard = vCardsJS();
 
//set properties
// vCard.firstName = 'Eric';
// vCard.middleName = 'J';
// vCard.lastName = 'Nesser';
vCard.organization = 'Pokedon';
vCard.workPhone = '480-556-1431';
// vCard.title = 'Software Developer';
vCard.workUrl = 'https://pokedonaz.com/#';
vCard.note = 'Poke! A tasty traditional Hawaiian staple made with fresh seafood and ingredients. Assemble your Poke Bowl in 6 steps…';
vCard.workAddress.label = 'Address';
vCard.workAddress.street = '1753 E Broadway Rd #103';
vCard.workAddress.city = 'Tempe';
vCard.workAddress.stateProvince = 'AZ';
vCard.workAddress.postalCode = '85282';
vCard.workAddress.countryRegion = 'United States of America';
 
//set social media URLs
// vCard.socialUrls['facebook'] = 'https://www.facebook.com/conceptoaz';
// vCard.socialUrls['instagram'] = 'https://www.instagram.com/conceptograficoaz';

// vCard.logo.attachFromUrl('https://my-vcard-contacts.herokuapp.com/Concepto-AZ-Logo.png', 'PNG');
// vCard.photo.attachFromUrl('https://my-vcard-contacts.herokuapp.com/Concepto-AZ-Logo.png', 'PNG');
//save to file
vCard.saveToFile('./graphico.vcf');
vCard.version = '3.0'
res.send(vCard.getFormattedString());

})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))