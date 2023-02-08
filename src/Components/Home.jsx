import React from 'react'
import style from "../styles/home.module.css"
import {Data} from "./Data.js"
export const Home = () => {

  return (
    <div className={style.gridbox}>
    {
      Data.map((ele) => (
        <div>
        <div className={style.container}>
            <div>
             <img className={style.image} src={ele.img1} />
             <img className={style.second} src={ele.img2}  />
 
             <div className={style.overlay}>
                <div  className={style.text}>Quick View</div>
             </div>
           </div>
          
          
        </div>
 
        <div className={style.flex}>
        <p className={style.first}>{ele.price1}</p>
        <p>{ele.price2}</p>
      </div>
 
      <button>Add to card</button>
      </div>
      ))
    }
      
    </div>
  )
}
