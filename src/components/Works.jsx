
import React from 'react';
import { useState  } from 'react';
import { Mydata } from '../data';

const Works = () => {
    console.log(Mydata);
    const [data,setdata]=useState(Mydata);
    const [selected, setSelected] = useState(0);


    const workone=(namework)=>{
        setdata(Mydata)
        const worko=Mydata.filter((el)=>{
            return(
                el.name === namework
            )
    });
  setdata(worko)

}
const handleClick = (divNum) => () => {
    setSelected(divNum);
  };
   
  return (
    <section className='our-works container '>
         <div className='title'>
                <p className='h2 mt-5'>أعمالنا</p>
            </div>
            <div className='works'>
                <div  onClick={handleClick(1)}><p onClick={()=>setdata(Mydata)} className={selected === 1|| selected === 0? "aactive btn": "btn"}>الكل</p></div>
                <div  onClick={handleClick(2)}><p className={selected === 2 ? "aactive btn": "btn"} onClick={()=>workone("work1")}>عمل1</p></div>
                <div  onClick={handleClick(3)}><p className={selected === 3 ? "aactive btn": "btn"}onClick={()=>workone("work2")}>عمل2</p></div>
                <div  onClick={handleClick(4)}><p className={selected === 4 ? "aactive btn": "btn"} onClick={()=>workone("work3")}>عمل  3</p></div>
            </div>
           
  <div className='image-container'>
           {
            data.map((ele,index)=>{
                return(
                    <div className='mywork' key={index}>
                        <img src={ele.src} alt={ele.name} />
                    </div>
                )
            })
           }
  </div>
    </section>
  
  )
}

export default Works
