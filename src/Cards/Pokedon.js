import React from 'react'

export const Pokedon = () => {



  return (
    <div >
       <p> <img src='/logo-pokedon.png'style={{"height" : "100px", "width" : "250px"}} onClick={()=>window.open('https://pokedonaz.com/#', '_blank')}></img></p>
         <p style={{"marginTop" : "50px", "marginBottom" : "50px"}} ><em>THANKS FOR SCANNING ~ !</em></p>
    <a href='/Pokedon.vcf' download><button id='contact-btn'><b>Add to Contacts</b></button></a>
    </div>
  )
}
