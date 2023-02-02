import React from 'react';
import { Mydata } from '../data';
import FAQ from './FAQ';


const Questions = () => {
    console.log(Mydata)
   
  return (
    <section className='Ques'>
        <div className='container que-content'>
            <div className='right-side'>
                <div className='common'>
                    
                    <ul class="list-group">
                    <h4>الأسئلة الشائعة</h4>
                    <li class="list-group-item">اسم النوع(٤)</li>
                    <li class="list-group-item">اسم النوع(٤)</li>
                    <li class="list-group-item">اسم النوع(٤)</li>
                    <li class="list-group-item">اسم النوع(٤)</li>
                    <li class="list-group-item">اسم النوع(٤)</li>
                    </ul>

                </div>
                <div className='commom-new'>
                
                <ul class="list-group">
                <h4>الأخبار الشائعة</h4>
                {
                    Mydata.map(({src,head})=>{
                        return(

                            <li class="list-group-item">
                            <div className='details'>
                               <img src={src} alt="dsd" />
                               <p>{head}</p>
                            </div>
                        </li>
                        )
                    }) 
                }            
                   
                    </ul>
                </div>

            </div>
            <div className='left-side'>
              {
                   Mydata.map(({head,content,id}) =>{
                    return(
                        <FAQ head={head} content={content} key={id} />
                    )
                 
                 })

                }
            

            </div>
        </div>

    </section>
  )
}

export default Questions
