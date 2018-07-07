import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'


class Task extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         tasks = []
    //     }
    // }
    render() {
        console.log(this.props.task);

        return(
           <div className="card">
               <h3 className="card-header"  style={{background:"#e9ecef"}}>
                    {this.props.task.title}
                    <button onClick = {this.handleClick} className="btn btn-primary btn-lg float-right">
                            Open
                    </button>
                </h3>
               <div className="cart-text">{this.props.task.description}</div>
               <div className="card-sutitle text-muter">{this.props.task.date}</div>
            </div>
            
        )
    }
    
    
}



export default Task