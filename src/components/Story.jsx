import React from 'react';
import { useState } from 'react';
import {AiOutlineClose} from "react-icons/ai";
import youyube from "../images/youtube.webp";
 
const Story = () => {

  const[show,setshow]=useState(false);
  console.log(show);
  return (
    <section className='story'>
        <div className='container'>
            <div className='our-story'>
                <div className='about-story'>
                 <p className='h1 mb-5'>تعرف على قصتنا</p>

                 <p className='lh-3'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.

                 هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.

                 </p>
                </div>
        
<div className="vid" >
   <img src={youyube} alt="youti=ube" onClick={()=> setshow(!show)}/>
  

     </div>

    <div className={show?"pop show":"pop hide"}>
      {show &&  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>}
  
   <AiOutlineClose className='close' onClick={()=> setshow(!show)}/>

     </div>
            </div>
        </div>
    </section>
  )
}

export default Story;
