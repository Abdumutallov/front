import React, {Component} from 'react'
import axios from "axios"


class Profile extends Component {

    
    componentDidMount() {
        axios.get(`http://172.16.19.55:8080/api/tasks/`)
          .then(profile => {
              console.log("profile",profile);
            
          })
      }
    render () {
   

        return (
            <div className="card" style = {{paddingLeft: "0", width: "28%", display: "inline-block", verticalAlign:"top"}}> 
                <div className="card-hader"   style={{background:"#00ffff", paddingLeft:"20px"}}>Name</div>
                <h3 style={{paddingLeft:"20px"}}>
                    {this.props.userss[0].name}
                </h3>
                <div className="card-hader"   style={{background:"#00ffff", paddingLeft:"20px"}}>Number</div>
                <h3 style={{textAlign:"center"}}>
                    {this.props.userss[0].number}
                </h3>
                <div className="card-hader"   style={{background:"#00ffff", paddingLeft:"20px"}}>Login</div>
                <h3 style={{paddingLeft:"20px"}}>
                    {this.props.userss[0].login}
                </h3>
                <div className="card-hader"   style={{background:"#00ffff", paddingLeft:"20px"}}>Karma</div>
                <h3 style={{paddingLeft:"20px"}}>
                    {this.props.userss[0].karma>0 ? "true" : "false"  }
                </h3>
                <div className="card-hader"   style={{background:"#00ffff", paddingLeft:"20px"}}>Rating</div>
                <h3 style={{paddingLeft:"20px"}}>
                    {this.props.userss[0].rating}
                </h3>
            </div>
        
        )
     
}
}

export default Profile