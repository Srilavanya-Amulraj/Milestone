import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import StarRatings from "react-star-ratings";
import {CSVLink} from "react-csv";
export default function Fileapi(){
    const[info,setinfo]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(details=>setinfo(details))
    },[])
    const csvdata = info;

return(
    <>
    {
        <div>
        <h1 className="heading text-center text-decoration-underline">API Product Details</h1>
        <CSVLink  data={csvdata.map((index,value)=>(
            {
                Id:index.id,
                Title:index.title,
                Price:index.price,
                Description:index.description,
                Category:index.category,
                Image:index.image,
                Rate:index.rating.rate,

            }
        )
            )}><button className="dwnld btn btn-primary">Download CSV</button></CSVLink>
        </div>

    },
    {
        info.map((index,value)=>(
        <div className="card my-4 mx-4" style={{width:"20rem",marginLeft:"40vw"}}> 
        <img className="w-50 mx-auto card-img-top mt-3" src={index.image} alt="..."style={{height:"10rem"}}/>
        <div className="card-body text-center d-flex flex-column justify-content-between m-4 p-4">
            <h5 className="card-title"> {index.title}</h5>
            <p className="card-text">${index.price}</p>
            <p className="card-text">{index.category}</p>
            <p className="rating">{index.rating.rate}
            <StarRatings rating={index.rating.rate}
            starDimension="20px"
            starSpacing="10px"
            starEmptyColor="grey"
            starRatedColor="blue"/></p>
            <a href="#" className="btn btn-primary">More Info</a>
        </div>
         </div>
        
        )
        )
    }
    
    
    </>
)




}