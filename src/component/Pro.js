import React,{Component} from "react";
import './Sanpham.css';
import anh from './images/toan10.png';



export const review=[
    {id:1,name:"Toan 11",gia:20000}
    ,{id:2,name:"Tieng Anh 11",gia:30000},
    {id:3,name:"Vat Ly 11",gia:40000},
    {id:1,name:"Dia 11",gia:20000}
    ,{id:2,name:"Su 12",gia:30000},
    {id:3,name:"Toan Hinh Hoc 12",gia:40000},
    {id:1,name:"Toan Dai So 12",gia:20000}
    ,{id:2,name:"Ngu Van 12",gia:30000},
    {id:3,name:"Cong Nghe 10",gia:40000},
    {id:1,name:"Tin Hoc 10",gia:20000}
    ,{id:2,name:"GDCD 10",gia:30000},
    {id:3,name:"GDQP 10",gia:40000}
    
    
    ];
function Pro(){
    return( 
        <>

        <div className="container">
        {review.map((data,index)=>{
            return( 
              <div className="product"  key={index}>
              <span className="image">
              <img src={anh} alt="" />
              </span>
              <span><h2>{data.name}</h2> </span>
              <span><h2>{data.gia}</h2> </span>
              <span className="style2"><button><h2>MUA</h2></button> </span>         
          </div>
            
            );
          }
          
          )}

            </div>
           
        </>


);
}
export default Pro;
