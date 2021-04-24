import React from 'react';
import '../../style/paner-form/Cards.css'
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Your apartment</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../../images/img-9.jpg'
              text='Apartment in Dalat'
              label='Đà Lạt'
              path='/services'
            />
            <CardItem
              src='../../images/img-2.jpg'
              text='Apartment in SAPA'
              label='SAPA'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../../images/img-3.jpg'
              text='Apartment in Hue'
              label='Hue'
              path='/services'
            />
            <CardItem
              src='../../images/img-4.jpg'
              text='Apartment in Hanoi'
              label='Hanoi'
              path='/services'
            />
            <CardItem
              src='../../images/img-8.jpg'
              text='Apartment in HCM City'
              label='HCM'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
