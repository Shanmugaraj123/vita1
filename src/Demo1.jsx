import React, { useEffect, useState } from 'react'

function Demo1() {
    const[demo,setdemo]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((res)=> res.json())
        .then((data)=>setdemo(data))
        .catch((err)=>console.log(err));
    },[]);
  return (
    <div>
        {
            demo.map((x,index)=>(
                <div key={index} >
                    <h4>{x.title}</h4>
                    <h5>{x.url}</h5>

                </div>
            )
            )
        }
    </div>
  )
}

export default Demo1