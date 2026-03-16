import React, { useEffect, useState } from 'react'

function Home() {
    const[demo,setdemo]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/meesho")
        .then((res)=> res.json())
        .then((data)=>setdemo(data))
        .catch((err)=>console.log(err));
    },[]);
  return (
    <div>
        {
            demo.map((x,index)=>(
                <div key={index}>

                 <div>  <img src={x.img} alt="" /></div>
                 
                   <div> <h2>{x.name}</h2></div>
                   <div> <h3>{x.price}</h3></div>
                   

                </div>
            )
            )
        }
    </div>
  )
}

export default Home