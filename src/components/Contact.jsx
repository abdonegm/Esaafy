import React from 'react';
import image from "../images/mapp.png";
import {BsTelephoneFill} from "react-icons/bs";
import {ImLocation2} from "react-icons/im";
import {MdEmail} from "react-icons/md";

const Contact = () => {
  return (
    <section className='container contact'>
        <div className='title'>
                <p className='h2 mt-5'>اتصل بنا</p>
            </div>
            <div className='contact-content mt-5'>
                <div className='locat'>
                    <img src={image} alt="map" />
                    <p className='h4 mt-4'>معلومات الإتصال</p>
                    <p className='mt-3'><MdEmail className='ms-1'/> abdonegm321@gmail.com</p>
                    <p className='mt-3'> <BsTelephoneFill className='ms-1'/>01283016124</p>
                    <p><ImLocation2 className='ms-1'/>شارع عبده الصعيدى-المنصورة</p>


                </div>
                <div className='forma p-5'>
                    <h4 className='mb-5'>دائما متواجدون فى انتظارك تواصل معنا</h4>
                    <div>
                         <div class="col-sm-10"> 
                            <input type="email" class="form-control form-control-sm p-2 mt-4" id="colFormLabelSm" placeholder="الإسم الخاص" />
                        </div>
                        <div class="col-sm-10">
                            <input type="email" class="form-control form-control-sm p-2  mt-4" id="colFormLabelSm" placeholder="البريد الإلكترونى الخاص بك" />
                        </div>
                        <div class="col-sm-10">
                            <input type="email" class="form-control form-control-sm p-2  mt-4" id="colFormLabelSm" placeholder="رسالتك" />
                        </div>
                        <div class="col-sm-10">
                        <textarea class="form-control mt-4" id="exampleFormControlTextarea1" placeholder='الموضوع' rows="3"></textarea>
                        </div>
                    </div>
                    

                </div>

            </div>

    </section>
  )
}

export default Contact