import {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddUser from "./AddUser";
import Users from "./Users";

export default class MainApp extends Component{
    state={
        headerData:'Welcome to Header',
        footerData:'Welcome to Footer',
        userData:[]
   }
    //adding the user

    componentDidMount(){
        const json = localStorage.getItem('users')// getting key from setItem
        const userData = JSON.parse(json)//converting string to object again using json.parse()
        if(userData){
            this.setState(()=>{ //we are inserting data in array
                return{
                    userData
                }
            })
        } 
    }
componentDidUpdate(){
    const json = JSON.stringify(this.state.userData)//userdata is object(array) but local storage does not understand objects it understands only strings so using json.stringify()
    localStorage.setItem('users',json)// setItem method has key-value pair syntax. users is key and json is value
}
    addUser=(data)=>{
        this.setState((prevState)=>{
            return {
                userData:prevState.userData.concat(data)
            }
        })
    }
    //Delete all users

    delteAll=()=>{
        this.setState(()=>{
            return{
                userData:[]
            }
        })
    }

    //delete individual user

    deleteOne=(user)=>{
        this.setState((prevState)=>{
            return{
                userData:prevState.userData.filter((us)=> user!==us)
            }
        })
    }
    render(){
        
    
    return(
        <div>
            <Users udata={this.state.userData}
            da={this.delteAll}
            hasData={this.state.userData.length > 0}
            dOne={this.deleteOne}/>
            <Header hdata={this.state.headerData}/>
            <p>MainApp Component</p>
            <AddUser au={this.addUser}/>
            <Footer fdata={this.state.footerData}/>
        </div>
       
    )
    }
}