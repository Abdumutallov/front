import React from 'react'
import Tasks from './Tasks'
import {taskss} from '../fixtures'
import SignInForm from './SignInForm'

function SignIn() {
   return(
        <div >
            <div>
               <h1 style = {{textAlign: "center"}}> Добро пожаловать</h1> 
            </div>
              <SignInForm/>       
            <Tasks taskss = {taskss}/>
                
        </div>
   )
}

export default SignIn