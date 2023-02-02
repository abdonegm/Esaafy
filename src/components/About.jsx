import React from 'react';
import image from "../images/about-image.png";

const About = () => {
  return (
    <section className='about'>
        <div className="about-app container">
            <div className='about-title'>
                <h1>كيفية عمل تطبيق إسعافى</h1>
                <p>
                قم بزيادة الإنتاجية باستخدام تطبيق بسيط متعدد<br/> الإستخدامات لكل الخدمات الإسعافية
                </p>

            </div>

            <div className='about-image'>
                <img src={image} alt="about" />
            </div>

        </div>
    </section>
  )
}

export default About
