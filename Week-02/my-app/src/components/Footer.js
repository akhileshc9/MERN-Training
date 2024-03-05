import {Component} from "react";


export default class Footer extends Component{
    render(){
        return(
            <div>
                <p>{this.props.fdata}</p>
            </div>
        )
    }
}