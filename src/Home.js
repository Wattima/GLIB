import React from 'react'
import "./App.css"
import {Link} from "react-router-dom"

function Home() {
  return (
  
    <div class="container h-100">
      
      <h1 class="display-3 font-weight-bold text-uppercase text-secondary">GLIB</h1>
      
      <div class="col d-flex justify-content-center mt-5">
    <div class="card text-center">
      <h1 class="card-title">Welcome to our Book Application</h1>
      
            Welcome to GLib the modern Day book app. 
            <br></br>
            The will enable you to cultivate your hobby in reading.
            <br></br>
            We will provide your with A ton of books from every genre.
            <br></br>
            <br></br>
          
              <Link to="/App">
              <button class="btn btn-outline-info fs-2 animated pulse" id="login-button">
            Log in</button></Link> to access the books.
            </div>
                
    </div>
       

    </div>
    
  )
}

export default Home