import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='container'>
        <div className='card'>

            <div className='card-img'>
                <img src={props.imgsrc} alt="" />
            </div>

            <div className='card-text'>
                <h1>{props.product}</h1>
                <p>{props.product_price}</p>
            </div>

        </div>


    </div>
  )
}

export default Card