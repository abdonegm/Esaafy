import React from 'react';
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import { useState } from 'react';
function FAQ({ head,content}) {

    const [myAnswer,setAnswer]=useState(false);
    console.log(content)


  return (
   <article className='faq' onClick={()=> setAnswer(prev => !prev)}>
    <div>
    <button >
             {
                myAnswer?<AiOutlineMinus />:<AiOutlinePlus /> 
             }
            
        </button>
        <h4>{head}</h4>
       
    </div>
    {
        myAnswer&& <p>{content}</p>
    }
   </article>
  )
}

export default FAQ