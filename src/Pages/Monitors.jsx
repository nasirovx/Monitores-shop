import React from 'react';
import products from '../data/product.json';
import CardItem from '../Components/CardItem';
import s from '../Style/Monitors.module.css';

const Monitors = () => {
  return (
    <div className={s.content}>
      <h1 className={s.title}>Monitores JBEE</h1>
      <div className={s.products}>
        {products.products.map(elem => (
            <CardItem {...elem}/>
          ))}
      </div>
    </div>
  )
}

export default Monitors