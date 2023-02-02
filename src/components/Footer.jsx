import React from 'react';
import logo from "../images/logo1.png";
import "./footer.css";
import {AiFillInstagram,AiFillFacebook,AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai";
import {BsTelephoneFill} from "react-icons/bs";
import {ImLocation2} from "react-icons/im";
import {MdEmail} from "react-icons/md";
import googleplay from "../images/googleplay.wine.svg";
import iphonestore from "../images/iphonestore.png";


const Footer = () => {
  return (
    <footer>
        <div className='container foot'>
            <div>
                <img src={logo} alt="logo" className='mb-3'/>
                <p>كل الخدمات الطبية في مكان واحد وفر ٧٥% عند اول رحلة</p>
                 <div className='icons'>
                    <AiFillFacebook className='fs-3 m-2'/>
                    <AiFillInstagram className='fs-3 m-2'/>
                    <AiFillLinkedin className='fs-3 m-2'/>
                    <AiFillTwitterCircle className='fs-3 m-2'/>
                 </div>
            </div>
            <div>
            <div className='title-foot'> <h5>روابط سريعة</h5></div>
            <p>اتصل بنا</p>
            <p>هن التطبيق</p>
            <p>أخبار</p>

            </div>
            <div>
                <div className='title-foot'> <h5> المساعدة</h5></div>
                <p>سياسة الخصوصية</p>
                <p>شروط الإستخدام</p>
                <p>الأسئلة الشائغة</p>
               
            </div>
            <div>
                <div className='title-foot'> <h5> معلومات التواصل</h5></div>
                <p><MdEmail className='ms-1'/>abdonegm321@gmail.com</p>
                <p> <BsTelephoneFill className='ms-1'/>01283016124 </p>
                <p><ImLocation2 className='ms-1'/>شارع عبده الصعيدى-المنصورة </p>
            </div>
            <div>
                <div className='title-foot'> <h5> حمل التطبيق</h5></div>
                <button className='btn btn-dark ms-3 mt-4'>Download App <img src={googleplay} alt="gf" /></button><br/>
              <button className='btn btn-dark mt-4'>Download App <img src={iphonestore} alt="gf" /></button>
            </div>
        </div>
    </footer>
  )
}

export default Footer
