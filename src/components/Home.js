import React from 'react'
import Tasks from './Tasks'
import Profile from './Profile';
import {taskss} from '../fixtures'
import {userss} from '../fixtures'

function Home() {
   return(
        <div >
            <div>
               <h1 style = {{textAlign: "center"}}> Список задач </h1> 
            </div>
            <Profile userss = {userss}/>          
            <Tasks taskss = {taskss}/>
                
        </div>
   )
}

export default Home