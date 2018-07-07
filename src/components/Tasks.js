import React, {Component} from 'react'
import Task from './Task'
import axios from "axios"


class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = { tasks: [] };

    }

    componentDidMount() {
     
        axios.get(`http://ksware.ru/sandbox/gf-api/tasks/`)
          .then(res => {
             
             this.setState({tasks:res.data.data})
           
          })
      }

    render() {
        const taskElements = this.state.tasks.map((task, index) => 
             <Task key={index} task = {task} />)
        return(
            <div  style = {{paddingLeft: "0", width: "70%", display: "inline-block", verticalAlign:"top", marginLeft:"20px"}}>
               {taskElements}
               <button /*onClick = {this.handleClick} */ className="btn btn-primary btn-lg float-right" style = {{position: "fixed", bottom: "15px", right: "15px", borderRadius: "50%"}}>
                            +
                </button>
            </div>

        )
    }
}
export default Tasks