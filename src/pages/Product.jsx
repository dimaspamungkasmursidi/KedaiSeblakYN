import React from 'react'
import Navbar from '../components/organisms/Header/Navbar';
import WhatsappButton from '../components/atoms/Buttons/WhatsappButton';

const Product = () => {
  return (
    <section>
        <Navbar />
      <div>
        <h1 className='text-3xl'>Product</h1>
      </div>
      <WhatsappButton />
    </section>
  )
}

export default Product;
