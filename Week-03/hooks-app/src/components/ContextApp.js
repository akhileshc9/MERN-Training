import React, { createContext, useContext, useState } from 'react'

const appContext = createContext()

const udata = {
    uname:'admin',email:'admin@mail.com',city:'Pune',salary:23456
}
function ContextApp(props) {
    const[users,setUsers]=useState(udata)
  return (
    <div>
        <appContext.Provider value={users}>
      <Employee/>
      </appContext.Provider>
    </div>
  )
}
function Employee(props) {
    const empContext = useContext(appContext)
    return (
      <div>
        Employee:{empContext.uname}
        <Salary/>
      </div>
    )
  }
  function Salary(props) {
    const salaryContext = useContext(appContext)
    return (
      <div>
        Salary:{salaryContext.salary}
      </div>
    )
  }

export default ContextApp
