import React, { useState } from 'react'

function Controlled() {
    const[name,setname]=useState("")
    function shan(e){
        setname(e.taregt.value)

    }
    function shan2(){
        alert("my name is" + name)

    }
  return (
    <div>
         <input type="text" value={name}  onChange={shan} />
        <button onClick={shan2}>Check Balance</button>

    </div>
  )
}

export default Controlled