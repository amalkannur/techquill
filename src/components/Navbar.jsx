import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import "./Components.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars  , faEllipsis } from '@fortawesome/free-solid-svg-icons'


function Navbar() {

     const [iconState , setIconState] = useState(true) 
     const toggleIcon = ()=>{ 
        setIconState(!iconState)
     }



  return (
    <div className='Navbar d-flex justify-content-between py-2'>
        
        <div className='d-flex align-items-center'> 
           <h2> TECHQUILL </h2>
        </div>

    <div className='d-none d-md-block'> 
        <ul className='d-flex justify-content-center align-items-center'> 
            <li className='nav-items'> <Link to="/">Home</Link></li>

            <li className='nav-items'><Link to="/about">About</Link></li>
            
            <li className='nav-items'> <Link to="/articles">Articles</Link></li>

            <li className='nav-items'> <Link to="/projects">Projects</Link></li>

            <li className='nav-items'> <Link to="/contact">Contact</Link></li>
        </ul>
    </div>

    <div className='connect-btn d-none d-md-flex align-items-center' >
        <Link to="/contact">Connect Us</Link>
    </div>
    


    
        
       <div className='d-block d-md-none'> 
       <button onClick={toggleIcon} className="btn menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"> 
       {iconState ? <FontAwesomeIcon icon={faBars} />  : <FontAwesomeIcon icon= {faEllipsis} />  }
         </button>
     
     
       </div>

        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">
            <ul> 
                <li data-bs-dismiss="offcanvas"> <Link  to="/">Home</Link></li>
                <li data-bs-dismiss="offcanvas"><Link to="/about">About</Link></li>
                <li data-bs-dismiss="offcanvas"> <Link to="/articles">Articles</Link></li>
                <li data-bs-dismiss="offcanvas"> <Link to="/projects">Projects</Link></li>
                <li data-bs-dismiss="offcanvas"> <Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Navbar