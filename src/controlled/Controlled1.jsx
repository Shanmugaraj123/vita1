import React, { useState } from 'react'

function Controlled1() {
    const[name,setname]=useState("")
    function shan(e){
        setname(e.target.value)

    }
    function shan2(){
        alert("my name is" + name)

    }
  return (
    <div>
          <input type="text"  
          value={name} 
          onChange={shan}/>
          <button onClick={shan2}>Check Balance</button>

    </div>
  )
}

export default Controlled1