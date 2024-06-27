import React from 'react'
import Navbar from '../components/organisms/Header/Navbar';
import WhatsappButton from '../components/atoms/Buttons/WhatsappButton';

const About = () => {
  return (
    <section>
        <Navbar />
      <div>
        <h1 className='text-3xl'>About</h1>
      </div>
      <WhatsappButton />
    </section>
  )
}

export default About;
