import React from 'react';
import {MdOutlineHistoryEdu} from "react-icons/md";
import {FaAmbulance} from "react-icons/fa";
import {BsTelephoneFill} from "react-icons/bs";
import {BiWallet} from "react-icons/bi";


const Features = () => {
  return (
    <section className='container features'>
         <div className='title'>
                <p className='h2 mt-5'>المميزات</p>
            </div>
            <div className='features-content'>
                <div>
                    <MdOutlineHistoryEdu />
                    <p className='h5 mb-3'>جدولة الحجز</p>
                    <p className='text-muted'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</p> 
                        
                </div>
                <div >
                    <FaAmbulance />
                    <p className='h5 mb-3'>البحث عن أقرب سيارة إسعاف</p>
                    <p className='text-muted'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</p> 

                </div>
                <div>
                    <BsTelephoneFill />
                    <p className='h5 mb-3'>التحدث مع السائق مباشرة</p>
                    <p className='text-muted'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</p> 

                </div>
                <div>
                    <BiWallet />
                    <p className='h5 mb-3'>المحفظة الإلكترونية</p>
                    <p className='text-muted'   >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</p> 
                </div>

              

            </div>



    </section>
      

  )
}

export default Features
