import React,{useEffect, useState} from 'react';
import './Menubar.css';
import Aboutus from "./Aboutus";
import{BrowserRouter,Route,Link,Routes
}from'react-router-dom';
import Home from "./Home";
import Product from "./Product";
import Pro from "./Pro";
import Detail from './Detail';
import Adminmanager from './admin/Adminmanager';
import {list as listbook}from "./listbook"
function Menubar(){
    const[postList,setPostList]=useState(listbook);
    console.log("this",postList.books)
//     const[postList,setPostList]=useState();

// useEffect(()=>{
// async function fetchPostList(){
//   const requestUrl='https://nhom6-backend-nodejs.herokuapp.com/api/get-all-books';
//   const respone = await fetch(requestUrl);
  
//   const responeJSON=await respone.json();
//   console.log({responeJSON});
//   const{books}=responeJSON;
//   setPostList(books);
// }
// fetchPostList();
// },[]

// );

    
    return(
        <BrowserRouter >
        <nav className="menu-bar">  
        <ul>
            <li className="active"> <Link to="/">HOME</Link></li>
            <li> <Link to="/product">PRODUCT</Link>
            <div className="sub-menu-1">
                <ul>
                    <li>New</li>
                    <li>Limited</li>
                    <li>Hot</li>
                </ul>
            </div>
    
            </li>
            <li> <Link to="/pro">CART</Link>
                <div className="sub-menu-1">
                    <ul>
                        <li>Favourite</li>
                        <li>Buy</li>
                    </ul>
                </div>
            
            </li>
            <li> <Link to="/home">INTRO</Link>
                <div className="sub-menu-1">
                    <ul>
                        <li>Shop</li>
                        <li>Product</li>
                    </ul>
                </div>
            </li>
            <li> <Link to="/home">CONTACT</Link>
                <div className="sub-menu-1">
                    <ul>
                        <li>Hotline</li>
                        <li>Email</li>
                    </ul>
                </div>
            </li>
                <li>
                <Link to="/about">ABOUT</Link>
                </li>
        </ul>
         
    </nav>
    <Routes>
    <Route path="/" element={<Home posts={postList.books}/>}></Route>
    
    <Route path="/product" element={<Product  posts={postList.books}/>}></Route>
  
    
    <Route path="/about" element={<Aboutus/>}></Route>
    <Route path="/product/chi-tiet/:id/:hinh/:tensach/:mota/:createdAt/:gia" element={<Detail />}></Route>
    <Route path="/admin" element={<Adminmanager posts={postList}/>}></Route>

   
    </Routes>
    </BrowserRouter>
    );
}
export default Menubar;

