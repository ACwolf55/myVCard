import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='home'>
      <header>
        
       <h1><u>Our V-cards!~</u></h1>
        </header>

<main>
      <Link to='/graphico' className='card-link-card'>
        <img src='/Concepto-AZ-Logo.png' className='small-logo'></img> 
        <h3>Concepto Grafico</h3>
    </Link>

  

    <Link to='/1800plumber' className='card-link-card'>  
    <img src='/plumberLogo.jpg' className='small-logo'></img>
       <h3>1-800-Plumber</h3> 
    </Link>
  

    <Link to='/pokedon' className='card-link-card'>
    <img src='/logo-pokedon.png' className='small-logo'></img> 
    <h3>Pokedon</h3>
    </Link> 

    <Link to='/frenchys' className='card-link-card'>
    <img src='/Frenchys.jpg' className='small-logo'></img> 
    <h3>Frenchys Cleaning Service</h3>
    </Link> 
   
   

</main>
    </div>
  )
}
