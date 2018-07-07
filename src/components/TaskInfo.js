import React, {Component} from 'react'
// import axios from "axios"


class TaskInfo extends Component {
    constructor(props) {
        super(props);

        this.state = { task: [] };

    }
    
    
    componentDidMount: function() {
        // axios.get(`http://ksware.ru/sandbox/gf-api/tasks/`)
        //   .then(response => {
        //       this.setState({task: response.data.data})
        //      console.log("3",response.data.data);
            
           
        //   })
        //   console.log("2");
        console.log(this.props.match.params.id)
      }
    render () {
        

        return(
            <h1>ht</h1>
        )

    }
}

export default TaskInfo