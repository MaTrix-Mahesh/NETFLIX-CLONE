import React from 'react'
import '../titleCard/Tittlecard.css'
import cards_data from '../../assets/cards/Cards_data'

function Tittlecard() {
  return (
    <div className='tittle-cards'>

      <h2>Popular on Netflix</h2>
      <div className="card-list">
        {
          cards_data.map((card, index)=>{
            return <div className="card"  key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Tittlecard
