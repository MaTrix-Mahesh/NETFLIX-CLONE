import React from 'react'
import '../Home/Home'
import Navbar from '../../components/navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_tittle from '../../assets/hero_tittle.png'
function Home() {
  return (
    <div  className='home'>
      <Navbar/>

      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img' />
        <div className="hero-caption">
            <img src={hero_tittle} alt="" />
            
        </div>
      </div>
    </div>
  )
}

export default Home
