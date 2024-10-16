import React from 'react'
import { Link } from 'react-router-dom';
import "./Components.scss"

function Navbar() {
  return (
    <div className='Navbar'>


    <div className='d-none d-md-block'> 
        <ul className='d-flex justify-content-center align-items-center'> 
            <li className='nav-items'> <Link to="/">Home</Link></li>

            <li className='nav-items'><Link to="/about">About</Link></li>
            
            <li className='nav-items'> <Link to="/articles">Articles</Link></li>

            <li className='nav-items'> <Link to="/contact">Contact</Link></li>
        </ul>
    </div>


       



        
       <div className='d-block d-md-none'> 
       <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>
       </div>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
            <ul > 
                <li data-bs-dismiss="offcanvas"> <Link  to="/">Home</Link></li>
                <li data-bs-dismiss="offcanvas"><Link to="/about">About</Link></li>
                <li data-bs-dismiss="offcanvas"> <Link to="/articles">Articles</Link></li>
                <li data-bs-dismiss="offcanvas"> <Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Navbar