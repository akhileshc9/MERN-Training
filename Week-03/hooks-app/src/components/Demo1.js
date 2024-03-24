import React, { useEffect, useState } from 'react'

function Demo1(props) {
    //step-1: initialize the state
    const[count,setCount]=useState(10)
    const inc=()=>{
        setCount(count+1)
    }
    const dec=()=>{
        setCount(count-1)
    }
    //didmount + didupdate
    useEffect(()=>{
      console.log('called on load');
    },[])
    useEffect(()=>{
      console.log('called on update')
    },[count])
  return (
    <div>
        <button onClick={inc}>INC</button> {/* Recommended */}
        {/* <button onClick={()=>setCount(count+1)}>INC</button> */} {/* Not Recommended */}
        <button onClick={dec}>DEC</button>
      <p>The Count is {count}</p> {/* step-2: rendering the state */}
    </div>
  )
}

export default Demo1;
