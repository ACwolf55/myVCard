import React from 'react'

export const Graphico = () => {


  return (
    <div className='graphico'>
       <p> <img src='/Concepto-AZ-Logo.png'style={{"height" : "100px", "width" : "250px"}} onClick={()=>window.open('www.conceptoaz.com', '_blank')}></img></p>
         <p style={{"marginTop" : "50px", "marginBottom" : "50px"}} ><em>THANKS FOR SCANNING ~ !</em></p>
    <a href='/graphico.vcf' download><button id='contact-btn'><b>Add to Contacts</b></button></a>

    </div>
  )
}
