import React from 'react';
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import googleplay from "../images/googleplay.wine.svg";
import iphonestore from "../images/iphonestore.png";
 

const Header = () => {
  return (
    <div>
     <header className='Header'>
        <div className='container'>
          <div className='header-content'>
            <div className='txt'>
            
              <p>مرحبا بك من جديد</p>
              <h2 className='mt-2 mb-3 h3' >تطبيق إسعافى أول تطبيق لخدمات الإسعاف فى مصر والشرق الأوسط</h2>
              <p className='lh-3'>
هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
        
<button className='btn btn-dark ms-3 mt-4'>Download App <img src={googleplay} alt="gf" /></button>
<button className='btn btn-dark mt-4'>Download App <img src={iphonestore} alt="gf" /></button>

            </div>
        
            <div className='circle'>
              <img id="f-img" src={image1} alt="fd"/>
              <img src={image2} alt="fd"/>

            </div>

    
            </div>

        </div>
     </header>
      
    </div>
  )
}

export default Header
