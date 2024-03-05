import {Component} from "react";


export default class User extends Component{
    render(){
        return(
            <div>
                {this.props.userNew}
                <button className="btn btn-warning" onClick={()=>this.props.duser(this.props.userNew)}>Delete</button>
            </div>
           
        )
    }
}