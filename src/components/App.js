import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter as Router,  Route, Link} from 'react-router-dom';
//import {hashHistory} from 'react-router';
//import createHistory from "history/createBrowserHistory";
import Home from './Home'
import SignIn from './SignIn'
import TaskInfo from './TaskInfo'
 
//const history = createHistory();

class App extends Component {
    render() {
        return (
            
            <Router >  
      
            <div className = "container">
                
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/signin">SignIn</Link></div>
                    <TaskInfo/>
                    
                    <hr/>
                    
                    <Route exact path="/" component={Home}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/task/:id"component={TaskInfo}/>
            </div>
        
            </Router>
        )
    }
}

export default App