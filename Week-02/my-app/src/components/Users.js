import {Component} from "react";
import User from "./User";

function Users(props){
    
        return(
            <div>
                {
                    props.udata.map((ud) =>  <User key={ud} userNew={ud} duser={props.dOne}/>)
                }
              <button className="btn btn-danger" disabled={!props.hasData} onClick={props.da}>Delete All</button>
            </div>
           
        )
    
}
export default Users