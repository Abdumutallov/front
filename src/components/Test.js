import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter as Router,  Route, Link} from 'react-router-dom';

import Home from './Home'


class Test extends Component {
    render() {
        return (
            <Router>
                <div>
                    
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about"></Link></div>
                     
                    


                    <hr/>

                    <Route path="/" component={Home}/>

                </div>
            </Router>
        )
    }
}

export default Test