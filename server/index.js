const express = require('express')
const app = express()
const path =require('path')
const cors = require('cors')
const vCardsJS = require('vcards-js');

require("dotenv").config(); 

app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(`${__dirname}/../build`))) 

const {PORT} = process.env


app.post('/addContact',(req,res)=>{
 
//create a new vCard
var vCard = vCardsJS();
 
//set properties
// vCard.firstName = 'Eric';
// vCard.middleName = 'J';
// vCard.lastName = 'Nesser';
vCard.organization = 'Concepto Graphico';
vCard.workPhone = '602-667-0047';
// vCard.title = 'Software Developer';
vCard.workUrl = 'www.conceptoaz.com';
vCard.note = 'Family Owned and Operated HOW CAN WE EMPOWER YOUR BRAND WITH THE POWER OF PRINTING?';
vCard.logo.embedFromString('iVBORw0KGgoAAAANSUhEUgAAA2...', 'image/png');
vCard.workAddress.label = 'Address';
vCard.workAddress.street = '3302 W Thomas Rd Suite 7';
vCard.workAddress.city = 'Phoenix';
vCard.workAddress.stateProvince = 'AZ';
vCard.workAddress.postalCode = '85018';
vCard.workAddress.countryRegion = 'United States of America';

vCard.homeAddress.label = '2nd Address';
vCard.homeAddress.street = '4029 N. 32nd. St.';
vCard.homeAddress.city = 'Phoenix';
vCard.homeAddress.stateProvince = 'AZ';
vCard.homeAddress.postalCode = '85018';
vCard.homeAddress.countryRegion = 'United States of America';
 
//set social media URLs
vCard.socialUrls['facebook'] = 'https://www.facebook.com/conceptoaz';
vCard.socialUrls['instagram'] = 'https://www.instagram.com/conceptograficoaz';

//save to file
vCard.saveToFile('./graphico.vcf');

console.log(vCard.getFormattedString());

})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))