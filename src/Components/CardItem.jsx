import React from 'react';
import s from '../Style/CardItem.module.css'

const CardItem = ({title, images, price}) => {
  return (
    <div className={s.cart}>
      <div className={s.cartitem}>
        <div><img src={images[0]} alt={title} /></div>
        <span className={s.cart_title}>{title}</span>
        <span className={s.cart_price}>{price} ₽</span>
      </div>
    </div>
  )
}

export default CardItem
