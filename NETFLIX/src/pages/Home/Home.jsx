import React from 'react'
import '../Home/Home.css'
import Navbar from '../../components/navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'


function Home() {
  return (
    <div  className='home'>
      <Navbar/>

      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img' />
        <div className="hero-caption">
            <img src={hero_title} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolorum, quis laudantium optio unde deserunt ea incidunt tenetur eaque delectus perspiciatis maiores aliquid reprehenderit id. Possimus modi sint quae neque.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
