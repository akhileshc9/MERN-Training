


function User(props){
    
        return(
            <div>
                {props.userNew}
                <button className="btn btn-warning" onClick={()=>props.duser(props.userNew)}>Delete</button>
            </div>
           
        )
    
}
export default User