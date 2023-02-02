import React from 'react';
import {FaAmbulance} from "react-icons/fa";
import {BiCrown} from "react-icons/bi";
import {ImLocation2} from "react-icons/im";

const Services = () => {
  return (
    <section className='services '>
        <div className='container'>
            <div className='title'>
                <p className='h2 mt-5'>الخدمات</p>
            </div>
            <div className='services-content'>
                <div>
                    <FaAmbulance />
                    <p className='h3 mb-3'>طلب الإسعاف</p>
                    <p>يمكنك طلب إسعاف بكل حرية وكل سهولة</p>


                </div>
                <div className='active'>
                    <BiCrown />
                    <p className='h3 mb-3'>إسعاف مخصوص</p>
                    <p>يمكنك طلب إسعاف مخوص تلزم كل احتياجتك</p>

                </div>
                <div className='item1'>
               <ImLocation2 />

               <p className='h3 mb-3'>بين المدن</p>
               <p>يمكنك البحث عن مكان توفير الخدمة وأين توجد سارات الإسعاف الخاصة بنا</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services
