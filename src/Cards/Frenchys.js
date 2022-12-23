import React from 'react'

export const Frenchys = () => {



  return (
    <div className='contact-card'>
       <p> <img src='/Frenchys.jpg'style={{"height" : "100px", "width" : "250px"}} onClick={()=>window.open('https://frenchyscleaningsvcs.com/', '_blank')}></img></p>
         <p style={{"marginTop" : "50px", "marginBottom" : "50px"}} ><em>THANKS FOR SCANNING ~ !</em></p>
    <a href='/Frenchys.vcf' download><button id='contact-btn'><b>Add to Contacts</b></button></a>
    </div>
  )
}