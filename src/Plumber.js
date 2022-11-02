import React from 'react'

export const Plumber = () => {
  return (
    <div>

    <p><img src='/plumberLogo.jpg'style={{"height" : "100px", "width" : "250px"}} onClick={()=>window.open('https://1800plumber.com/locations/scottsdale-az', '_blank')}></img></p>   
     <p style={{"marginTop" : "50px", "marginBottom" : "50px"}} ><em>THANKS FOR SCANNING ~ !</em></p>
     <a href='/1800plumber.vcf' download><button id='contact-btn'><b>Add to Contacts</b></button></a>
 
 
 
     </div>
  )
}
