import React from 'react'
import "./App.css"
import {Link} from "react-router-dom"

function Home() {
  return (
  
    <div class="container h-100">
      
      <h1 class="display-3 font-weight-bold text-uppercase text-secondary">GLIB</h1>
      
      <div class="col d-flex justify-content-center mt-5">
    <div class="card text-center">
      <h1 class="card-title">Welcome to our Book Application</h1
      
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
            </p>
  https://github.co      
    </div>
        <p class="card-text fs-5" >
            Welcome to GLib the modern Day book app the will enable you to cultivate your hobby in reading.{"\n"}
            We will provide your with A ton of books from every genre.
            Log In to enjoy Enjoy more.
            Find Your Next Read Instantly! 
 
Features section:

Search with ease
Our easy-to-use search engine allows you to find the perfect book for you quickly and efficiently. Whether you're looking for a classic novel or the latest bestseller, Book Search has it all!

Discover new books
Explore our library of over millions of books and discover new authors and genres that you'll love. With so many options to choose from, finding your next favorite book has never been easier! 


 

Convenient access 
Don't worry about lugging around heavy books anymore! With Book Search, all your favorites are accessible through your phone, tablet or laptop. Enjoy reading on the go with convenience and ease.
        </p>

    </div>
    </div>
  )
}

export default Home