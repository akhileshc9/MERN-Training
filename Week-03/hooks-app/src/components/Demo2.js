import React, { useEffect, useState } from "react";

function Demo2(props) {
  const [users, setUsers] = useState([]);
  const [uname, setUname] = useState("");
  const [uemail,setUemail] = useState('');
  
  useEffect(()=>{
    localStorage.setItem('gfg',JSON.stringify(users))
  },[users])
  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, { uname, uemail }]);
    setUname('')
    setUemail('')
  };
  const deleteUser = (uname) => {
    setUsers(users.filter((note)=> note.uname !== uname))
  }
  const deleteAll = () => {
    setUsers([])
  }
  return (
    <div className="container">
      {users.map((data) => (
        <div key={data.uname} className="card" >
            <div className="card-body">
            {data.uname} -- {data.uemail}
           
            </div>
            <div className="card-body">
            <button className="btn btn-danger" onClick={()=>deleteUser(data.uname)}>Delete</button>
            
                </div>
                
            
        </div>
      ))}
      <div className="card-body">
        <button className="btn btn-danger" onClick={deleteAll}>Delete All</button>
        </div>
      
      <div className="card">
      <form onSubmit={addUser}>
        <div className="card-body">
        <input
          type="text"
          placeholder="Enter Username"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        ></input>
        </div>
        <div className="card-body">
        <input
          type="email"
          placeholder="Enter Email"
          value={uemail}
          onChange={(e) => setUemail(e.target.value)}
        ></input>
        </div>
        <div className="card-body">
        <button className="btn btn-primary">Add User</button>
        
        </div>
      </form>
      </div>
    </div>
  );
}
export default Demo2;
